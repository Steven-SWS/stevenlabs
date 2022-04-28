import './dataMigration.scss';
import icon_close from '../../../assets/images/icon_close.png'
import logo_Union from '../../../assets/images/Union.png'
import icon_arrow_t from '../../../assets/images/icon_arrow_t.png'
import icon_download from '../../../assets/images/icon_download.png'
import icon_refresh from '../../../assets/images/icon_refresh.png'

import { Form, Button, Select, Input, Pagination, DatePicker, Checkbox } from 'antd';
const { Search } = Input;
const { Option } = Select;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
function dataMigration() {
    return ( 
        <>
        <div className="dataMigration vm_wrap">
            <div className="model_verification_tab">
                <div className="db_tab">
                    <span className='on'>migration</span>
                    <span>wrangle</span>
                </div>
            </div>
            <div className="container flex-row">
                <div className="search-filter">
                    <div className="header act_on">
                        <div className="section_title">
                            <div className="title-rectangle"></div>
                            <span>Search filter</span>
                        </div>
                        <div className="btn_box">
                            <Button type="link">History</Button>
                            <Button type="link">Preset</Button>
                            <Button type="link"><img src={icon_arrow_t} alt="" /></Button>
                        </div>
                    </div>
                    <div className="content_box b_mt-10">
                        <Form name="control-hooks" className="label_cb_wrap">
                            <Form.Item label="Fab" >
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                            <Form.Item label="Lot code">
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <Form name="control-hooks" className='period_wrap b_mt-6'>
                            <Form.Item label="Period" >
                                <RangePicker />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="content_box">
                        <div className="sub_title_wrap">
                            <span>FDC summary</span>
                            <span className="line_box"></span>
                        </div>
                        <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                            <Form.Item label="Area" >
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                            <Form.Item label="Recipe ID" >
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                            <Form.Item label="Sum type" >
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <div className="cnt_box">
                            <div className="action-btn">
                                <span className="pt_4">Step ID</span>
                                <div className="btn_box">
                                    <div className="all_btn">
                                        <Button type="link">Delete all</Button>
                                    </div>
                                    <div className="btn_lst">
                                        <Button type="link">ABCD1<img src={icon_close} alt="" /></Button>
                                        <Button type="link">ABCD2.1<img src={icon_close} alt="" /></Button>
                                        <Button type="link">ABCD2.2<img src={icon_close} alt="" /></Button>
                                        <Button type="link">ABCD2.3<img src={icon_close} alt="" /></Button>
                                        <Button type="link">ABCD2.4<img src={icon_close} alt="" /></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cnt_box">
                            <div className="action-btn">
                                <span className="pt_4">Step Name</span>
                                <div className="btn_box">
                                    <div className="all_btn">
                                        <Button type="link">Delete all</Button>
                                    </div>
                                    <div className="btn_lst">
                                        <Button type="link">ABCD1<img src={icon_close} alt="" /></Button>
                                        <Button type="link">ABCD2.1<img src={icon_close} alt="" /></Button>
                                        <Button type="link">ABCD2.2<img src={icon_close} alt="" /></Button>
                                        <Button type="link">ABCD2.3<img src={icon_close} alt="" /></Button>
                                        <Button type="link">ABCD2.4<img src={icon_close} alt="" /></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sub_title_wrap">
                            <span>response data</span>
                            <span className="line_box"></span>
                        </div>
                        <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                            <Form.Item label="PRM ID" >
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <div className="btn_cnt b_mt-10">
                            <Button>Migrate</Button>
                        </div>
                    </div>
                    <div className="header">
                        <div className="section_title">
                            <div className="title-rectangle"></div>
                            <span>Migration list</span>
                        </div>
                    </div>
                    <div className="logo_wrap">
                        <img src={logo_Union} alt="" />
                        <span>Gauss Manufacturing AI</span>
                    </div>
                </div>
                
                <div className="content_wrap cnt_box-p3050">
                    <div className="section-title flex-row flex-row-center b_mb-30">
                        <div className="title-rectangle"></div><span>Search filter</span>
                    </div>
                    <div className="searchfilter_wrap b_mb-20">
                        <div className='flex-row'>
                            <Form name="control-hooks" className="label_cb_wrap">
                                <Form.Item label="Fab" >
                                    <Select
                                        allowClear
                                    >
                                        <Option value="">Text/number</Option>
                                        <Option value="">Text/number</Option>
                                        <Option value="">Text/number</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                            <Form name="control-hooks" className="label_cb_wrap">
                                <Form.Item label="Product ID" >
                                    <Select
                                        allowClear
                                    >
                                        <Option value="">Text/number</Option>
                                        <Option value="">Text/number</Option>
                                        <Option value="">Text/number</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div className="sub_title b_mt-30">
                        <span>FDC summary</span>
                    </div>
                    <div className="searchfilter_wrap b_mb-20">
                        <div className='flex-row'>
                            <Form name="control-hooks" className="label_cb_wrap">
                                <Form.Item label="Fab" >
                                    <Select
                                        allowClear
                                    >
                                        <Option value="">Text/number</Option>
                                        <Option value="">Text/number</Option>
                                        <Option value="">Text/number</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                            <Form name="control-hooks" className="label_cb_wrap">
                                <Form.Item label="Product ID" >
                                    <Select
                                        allowClear
                                    >
                                        <Option value="">Text/number</Option>
                                        <Option value="">Text/number</Option>
                                        <Option value="">Text/number</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div className="flex-row b_mb-20 b_bd-a">
                        <div className="lot_wrap">
                            <div className='opensans-normal-heavy-metal-14px'>Step ID</div>
                            <Search className='b_mt-10 b_mb-10'
                                    placeholder="Search"
                                    onSearch={value => console.log(value)}
                                />
                            <Button type="link">Select all</Button>
                            <ul className='checkbox_scroll'>
                                <li><Checkbox onChange={onChange}>ABCD1</Checkbox></li>
                                <li><Checkbox onChange={onChange}>ABCD2</Checkbox></li>
                                <li><Checkbox onChange={onChange}>ABCD3</Checkbox></li>
                                <li><Checkbox onChange={onChange}>ABCD4</Checkbox></li>
                                <li><Checkbox onChange={onChange}>ABCD5</Checkbox></li>
                                <li><Checkbox onChange={onChange}>ABCD6</Checkbox></li>
                                <li><Checkbox onChange={onChange}>ABCD7</Checkbox></li>
                                <li><Checkbox onChange={onChange}>ABCD8</Checkbox></li>
                                <li><Checkbox onChange={onChange}>ABCD9</Checkbox></li>
                                <li><Checkbox onChange={onChange}>ABCD10</Checkbox></li>
                                <li><Checkbox onChange={onChange}>ABCD11</Checkbox></li>
                            </ul>
                        </div>
                        <div className="wafer_wrap">
                            <div className='opensans-normal-heavy-metal-14px b_mb-20'>Wafer ID</div>
                            <div className='checkbox_wrap'>
                                <ul>
                                    <li><Button type="link">Select all</Button></li>
                                    <li><Checkbox onChange={onChange}>1</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>2</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>3</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>4</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>5</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>6</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>7</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>8</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>9</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>10</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>11</Checkbox></li>
                                </ul>
                                <ul>
                                    <li><Checkbox onChange={onChange}>12</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>13</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>14</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>15</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>16</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>17</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>18</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>19</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>20</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>21</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>22</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>23</Checkbox></li>
                                </ul>
                                <ul>
                                    <li><Checkbox onChange={onChange}>24</Checkbox></li>
                                    <li><Checkbox onChange={onChange}>25</Checkbox></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sub_title b_mt-30">
                        <span>response data</span>
                    </div>
                    <div className="searchfilter_wrap b_mb-20">
                        <div className='flex-row'>
                            <Form name="control-hooks" className="label_cb_wrap">
                                <Form.Item label="Parameter ID" >
                                    <Select
                                        allowClear
                                    >
                                        <Option value="">Text/number</Option>
                                        <Option value="">Text/number</Option>
                                        <Option value="">Text/number</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div className="flex-row fiex-jc-end">
                        <Button className='btn_on'>Migrate</Button>
                    </div>
                </div>
            </div> 
        </div>
        </>
     );
}

export default dataMigration;