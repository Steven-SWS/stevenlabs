#-*- coding: utf-8 -*-

# Oracle
import cx_Oracle as ora

# Pie chart, where the slices will be ordered and plotted counter-clockwise:
import matplotlib.pyplot as plt
import pandas as pd
from pandas.io.sql import read_sql

# Exception
import traceback
import os


# oracle connection
def getDAS_EES():

    # 오라클 서버 접속 (oci.dll 방식 연결 (32/64 bit client 체크 필수))
    port = 1521
    hostname = '127.0.0.1' # DB Server-IP
    service_name = 'EES'
    tnsnamesora_alias = 'EES'
    # tns_dsn = ora.makedsn(hostname, port, service_name) # NG | SID 연결 -> (DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=127.0.0.1)(PORT=1521))(CONNECT_DATA=(SID=EES)))
    tns_dsn = '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=127.0.0.1)(PORT=1521))(CONNECT_DATA=(SID=EES)))'
    ora_id = 'EESAPP'
    ora_pwd = 'EESAPP'
    ora_connVal = [ora_id, '/', ora_pwd, '@', hostname, ':', str(port), '/', service_name]

    try:
        # 커넥션 연결
        # conn = ora.connect("EESAPP/EESAPP@127.0.0.1:1521/EES") # OK
        # conn = ora.connect(''.join(ora_connVal)) # OK
        # conn = ora.connect(ora_id, ora_pwd, service_name) # NG | TNS_ADMIN 환경변수로 읽기 때문에 Alias로 접속해야함
        # conn = ora.connect(ora_id, ora_pwd, tnsnamesora_alias) # OK
        conn = ora.connect(ora_id, ora_pwd, tns_dsn) # OK

    except ora.DatabaseError as ex:
        print('Error 발생 : ', ex)
        print(getTracebackStr())
    except Exception as e:
        print('Error 발생 : ', e)
        print(getTracebackStr())

    return conn


# close connection
def close(conn):
    if conn:
        conn.close()


# select (binding)
def select(conn, sql, bindVariable={}, type='pandas'):

    # 리턴 객체 초기화
    rs = []

    # 커서 연결
    cursor = conn.cursor()

    if type == 'pandas':
        ### 쿼리문 실행 (pandas에서 제공하는 read_sql 함수를 사용하여 쿼리하면 보기 쉽다)
        if len(bindVariable) == 0:
            rs = pd.read_sql(sql, conn)
        else:
            rs = pd.read_sql(sql, conn, params=bindVariable)
    else:
        # 쿼리문 실행 (cx_Oracle API)
        if len(bindVariable) == 0:
            cursor.execute(sql)
        else:
            cursor.execute(sql, bindVariable)

        for record in cursor.fetchall():
            rs.append(record)

    # print('*** SELECT 결과 ***')
    # print(rs)
    # print('￦n')

    if cursor:
        cursor.close()

    return rs







#--------------------------------------------------------------------------------

# oracle connection Test
def oracleTest():
    conn = []
    cursor = []

    # 오라클 서버 접속 (oci.dll 방식 연결 (32/64 bit client 체크 필수))
    port = 1521
    hostname = '127.0.0.1' # DB Server-IP
    service_name = 'EES'
    tnsnamesora_alias = 'EES'
    # tns_dsn = ora.makedsn(hostname, port, service_name) # NG | SID 연결 -> (DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=127.0.0.1)(PORT=1521))(CONNECT_DATA=(SID=EES)))
    tns_dsn = '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=127.0.0.1)(PORT=1521))(CONNECT_DATA=(SID=EES)))'
    ora_id = 'EESAPP'
    ora_pwd = 'EESAPP'
    ora_connVal = [ora_id, '/', ora_pwd, '@', hostname, ':', str(port), '/', service_name]

    try:
        # 커넥션 연결
        # conn = ora.connect("EESAPP/EESAPP@127.0.0.1:1521/EES") # OK
        # conn = ora.connect(''.join(ora_connVal)) # OK
        # conn = ora.connect(ora_id, ora_pwd, service_name) # NG | TNS_ADMIN 환경변수로 읽기 때문에 Alias로 접속해야함
        # conn = ora.connect(ora_id, ora_pwd, tnsnamesora_alias) # OK
        conn = ora.connect(ora_id, ora_pwd, tns_dsn) # OK

        # 커서 연결
        cursor = conn.cursor()

        # SQL 쿼리문 (줄바꿈 : 역슬러쉬)
        sql = "select \
                * \
                from tab \
                where table_name = :1 \
                and rownum < :2 \
                order by 1"
        bindVar_dict = {
            '1': 'emp_table',
            '2': 5,
        }
        bindVar_tuple = ('emp_table', 5,)

        ### 방법1. 쿼리문 실행
        # print()
        # cursor.execute(sql, bindVar_tuple)
        # for record in cursor.fetchall():
        #     print(record)
        # print()

        ### 방법2. 쿼리문 실행 (pandas에서 제공하는 read_sql 함수를 사용하여 쿼리하면 보기 쉽다)
        rs = pd.read_sql(sql, conn, params=bindVar_dict)
        print()
        print(rs)
        print()

    except ora.DatabaseError as ex:
        print('Error 발생 : ', ex)
        print(getTracebackStr())
        if conn:
            conn.rollback()
    except Exception as e:
        print('Error 발생 : ', e)
        print(getTracebackStr())

    finally:
        if not cursor:
            pass
        else:
            cursor.close()

        if not conn:
            pass
        else:
            conn.close()


# Exception Stack Trace 정보 이쁘게 정렬
def getTracebackStr():
    lines = traceback.format_exc().strip().split('\n')
    rl = [lines[-1]]
    lines = lines[1:-1]
    lines.reverse()
    nstr = ''
    for i in range(len(lines)):
        line = lines[i].strip()
        if line.startswith('File "'):
            eles = lines[i].strip().split('"')
            basename = os.path.basename(eles[1])
            lastdir = os.path.basename(os.path.dirname(eles[1]))
            eles[1] = '%s/%s' % (lastdir, basename)
            rl.append('^\t%s %s' % (nstr, '"'.join(eles)))
            nstr = ''
        else:
            nstr += line
    return '\n'.join(rl)


# main
def main():
    print('----- stx -----')
    oracleTest()
    print('----- end -----')


# python C:\Program_SWS\99_Develop\01_Python\.VueDjangoStarterWebApp\backend\mysiteProject\DAS.py
if __name__ == "__main__":
    main()
