#-*- coding: utf-8 -*-

from django.db import models
from mysiteProject import DAS


# Get Code Master Info
class CodeMasterInfo(models.Model):
    
    def __str__(self) -> str:
        return self.name

    def getCodeInfo(self, **kwargs):
        rs = []
        conn = DAS.getDAS_EES()

        if not conn:
            print("##### 문제가 있음 #####")
        else:
            # SQL 쿼리문
            sql ="select \
                    distinct category \
                    from code_mst_pp \
                    where 1=1 \
                    order by category"
            bindHardCode_dict ={}
            bindVar_tuple = ()

            df = DAS.select(conn, sql, bindVar_tuple, type='pandas')

        DAS.close(conn)

        rs = df.to_dict()
        #rs = df.columns.values.tolist() + df.values.tolist()
        #print(type(rs))
        #print(rs)
        return rs

    def getCodeInfo_Detail(self, category_id, **kwargs):
        rs = []
        conn = DAS.getDAS_EES()

        if not conn:
            print("##### 문제가 있음 #####")
        else:
            # SQL 쿼리문
            sql ="select \
                    use_yn, category, code, name, description \
                    from code_mst_pp \
                    where 1=1 \
                    and category = :1 \
                    order by category, code_order"
            bindHardCode_dict ={
                '1': category_id,
            }
            bindVar_tuple = (category_id,)

            df = DAS.select(conn, sql, bindHardCode_dict, type='pandas')

        DAS.close(conn)

        #rs = df.to_dict()
        #rs = df.columns.values.tolist() + df.values.tolist()
        rs = df.values.tolist()
        #print(type(rs))
        #print(rs)
        return rs


# Get AREA Master Info
class AreaMasterInfo(models.Model):
    
    def __str__(self) -> str:
        return self.name

    def getAreaInfo(self, **kwargs):
        rs = []
        conn = DAS.getDAS_EES()

        if not conn:
            print("##### 문제가 있음 #####")
        else:
            # SQL 쿼리문
            sql ="select \
                    * \
                    from area_mst_pp \
                    where 1=1 \
                    and area in ('ETCH','CMP','IMP','DIFF','PHOTO','CLEAN','MI','TF') \
                    order by area"
            bindHardCode_dict ={}
            bindVar_tuple = ()

            df = DAS.select(conn, sql, bindVar_tuple, type='pandas')

        DAS.close(conn)

        rs = df.to_dict()
        #rs = df.columns.values.tolist() + df.values.tolist()
        #print(type(rs))
        #print(rs)
        return rs


# Get EQP Master Info
class EqpMasterInfo(models.Model):
    
    def __str__(self) -> str:
        return self.name

    def getEqpInfo(self, view_id, area_id, **kwargs):
        rs = []
        conn = DAS.getDAS_EES()

        if not conn:
            print("##### 문제가 있음 #####")
        else:
            # SQL 쿼리문
            sql ="select \
                    * \
                    from {0} \
                    where 1=1 \
                    and module_type_cd = 'M' \
                    and area = :1 \
                    order by line, area, eqp_id".format(view_id)
            bindHardCode_dict ={
                '1': 'CMP',
            }
            bindVar_tuple = (area_id,)

            df = DAS.select(conn, sql, bindHardCode_dict, type='pandas')

        DAS.close(conn)

        rs = df.to_dict()
        #rs = df.columns.values.tolist() + df.values.tolist()
        #print(type(rs))
        #print(rs)
        return rs

    def getEqpInfo_Detail(self, view_id, area_id, eqp_id, **kwargs):
        rs = []
        conn = DAS.getDAS_EES()

        if not conn:
            print("##### 문제가 있음 #####")
        else:
            # SQL 쿼리문
            sql ="select \
                    * \
                    from {0} \
                    where 1=1 \
                    and module_type_cd = 'M' \
                    and area = :1 \
                    and eqp_id = :2 \
                    order by line, area, eqp_id".format(view_id)
            bindHardCode_dict ={
                '1': 'CMP',
                '2': 'CMP501',
            }
            bindVar_tuple = (area_id, eqp_id,)

            df = DAS.select(conn, sql, bindVar_tuple, type='pandas')

        DAS.close(conn)

        rs = df.to_dict()
        #rs = df.columns.values.tolist() + df.values.tolist()
        #print(type(rs))
        #print(rs)
        return rs
