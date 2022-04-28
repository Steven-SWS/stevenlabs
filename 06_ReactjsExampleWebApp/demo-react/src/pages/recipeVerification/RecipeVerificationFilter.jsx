import React, { useState } from 'react'
import './RecipeVerificationFilter.scss'

import { Form, Button, Select, DatePicker, Input, Checkbox } from 'antd';
import { getFabs, getOperationIds, getProductIds } from '../../services/aims/Search'


const { RangePicker } = DatePicker;
const { Option } = Select;
const { Search } = Input;

const RecipeVerificationFilter = (props) => {
    const [fabs, setFabs] = useState();
    const [products, setProducts] = useState();
    const [operations, setOperations] = useState();
    const [selectedItems, setSelectedItems] = useState({});

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    function getFabDatas() {
        if (fabs != null) return;
        getFabs().then(result => {
            setFabs(result.data);
        })
    }
    function getProductDatas() {
        if (products != null) return;
        getProductIds(selectedItems?.fab).then(result => {
            setProducts(result.data);
        })

    }
    function getOperationDatas() {
        if (operations != null) return;
        getOperationIds(selectedItems?.product).then(result => {
            setOperations(result.data);
        })

    }
    function cbChange(name, value) {
        selectedItems[name] = value;
    }
    function clearData(name) {
        /*eslint-disable */
        switch (name) {
            case "product":
                products = null;
            case "operation":
                operations = null;

        }
        /*eslint-enable */
    }

    return (
        <div className="content cnt_box-p3050">
            <div className="section-title flex-row flex-row-center b_mb-30"><div className="title-rectangle"></div><span>Search filter</span></div>
            <div className="searchfilter_wrap b_mb-20">
                <div className='flex-row b_pb-20 b_mb-20'>
                    <Form name="control-hooks" className="label_cb_wrap">
                        <Form.Item label="Fab" >
                            <Select
                                allowClear
                                onFocus={getFabDatas}
                                defaultValue={selectedItems.fab}
                                onChange={(value) => cbChange('fab', value)}
                            >
                                {
                                    fabs?.map(item => (
                                        <Option value={item} key={item}>{item}</Option>
                                    )

                                    )
                                }

                            </Select>
                        </Form.Item>
                    </Form>
                    <Form name="control-hooks" className="label_cb_wrap">
                        <Form.Item label="Product ID" >
                            <Select
                                allowClear
                                onFocus={getProductDatas}
                                defaultValue={selectedItems.product}
                                onChange={(value) => cbChange('product', value)}
                            >
                                {
                                    products?.map(item => (
                                        <Option value={item} key={item}>{item}</Option>
                                    )

                                    )
                                }

                            </Select>
                        </Form.Item>
                    </Form>
                    <Form name="control-hooks" className="label_cb_wrap">
                        <Form.Item label="Operation ID" >
                            <Select
                                allowClear
                                onFocus={getOperationDatas}
                                defaultValue={selectedItems.operation}
                                onChange={(value) => cbChange('operation', value)}
                            >
                                {
                                    operations?.map(item => (
                                        <Option value={item} key={item}>{item}</Option>
                                    )

                                    )
                                }

                            </Select>
                        </Form.Item>
                    </Form>
                </div>
                <div className="flex-row b_pb-20 b_mb-20">
                    <Form name="control-hooks" className="label_cb_wrap">
                        <Form.Item label="Meas. Recipe" >
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
                        <Form.Item label="AIMS Recipe" >
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
                <div className="flex_row">
                    <Form name="control-hooks" className='period_wrap'>
                        <Form.Item label="Period" >
                            <RangePicker />
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className="flex-row b_mb-20 b_bd-a">
                <div className="lot_wrap">
                    <div className='opensans-normal-heavy-metal-14px'>Lot ID</div>
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
            <div className="action-box">
                <Form name="control-hooks" className='label_cb_wrap'>
                    <Form.Item label="Evaluation type" >
                        <Select
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </div>
            <div className="flex-row fiex-jc-end">
                <Button className='btn_on' onClick={() => { props.showResult() }} >Verification result</Button>
            </div>
        </div>
    )
}

export default RecipeVerificationFilter
