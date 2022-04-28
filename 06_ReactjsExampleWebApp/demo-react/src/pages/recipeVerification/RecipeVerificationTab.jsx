import React, { useState } from 'react'
import './RecipeVerification.scss'
import icon_arrow_t from '../../assets/images/icon_arrow_t.png'
import icon_close from '../../assets/images/icon_close.png'
import logo_Union from '../../assets/images/Union.png'

import { Form, Button, Select, DatePicker } from 'antd';
import { getFabs, getOperationIds, getProductIds, getMeasureRecipes, getAIMSRecipes } from '../../services/aims/Search'


const { RangePicker } = DatePicker;
const { Option } = Select;
const RecipeVerificationTab = (props) => {
    const [selectedItems, setSelectedItems] = useState({
        fab: 'fab1', product: 'fab1_product0', operation: 'f1_p0_op0', measureRecipe: 'f1_p0_op0_m_recipe0', aimsRecipe: 'f1_p0_op0_m_recipe0'
    }
    );

    const [fabs, setFabs] = useState();
    const [products, setProducts] = useState();
    const [operations, setOperations] = useState();
    const [measureRecipes, setMeasureRecipes] = useState();
    const [aimsRecipes, setAIMSRecipes] = useState();
    const [showFilter, setShowFilter] = useState(true);




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
    function getMeasureRecipeDatas() {
        if (measureRecipes != null) return;
        getMeasureRecipes(selectedItems.operation).then(result => {
            setMeasureRecipes(result.data);
        })
    }
    function getAIMSRecipeDatas() {
        if (aimsRecipes != null) return;
        getAIMSRecipes(selectedItems.operation).then(result => {
            setAIMSRecipes(result.data);
        })
    }


    function cbChange(name, value) {
        clearItem(name);

        selectedItems[name] = value;
        setSelectedItems(Object.assign({}, selectedItems));

    }
    function clearItem(name) {
        /*eslint-disable */
        switch (name) {
            case "fab":
                setProducts(null);
                selectedItems['product'] = null;
            case "product":
                setOperations(null);
                selectedItems['operation'] = null;
            case "operation":
                setMeasureRecipes(null);
                setAIMSRecipes(null);
                selectedItems['measureRecipe'] = null;
                selectedItems['aimsRecipe'] = null;
            case "measureRecipe":
            case "aimsRecipe":
            default:
                setSelectedItems(Object.assign({}, selectedItems));
        }
        /*eslint-enable */
    }

    function onClickTab(e) {
        props.clickTab(e);
        if (e === 'filter') {
            setShowFilter(true);
        } else {
            setShowFilter(false);
        }
    }

    return (
        <div className="content">
            <div className={showFilter ? 'header act_on' : 'header'} >
                <div className="section_title" onClick={() => onClickTab('filter')}>
                    <div className="title-rectangle"></div>
                    <span>Search filter</span>
                </div>
                <div className="btn_box">
                    <Button type="link">History</Button>
                    <Button type="link">Preset</Button>
                    <Button type="link"><img src={icon_arrow_t} alt="" /></Button>
                </div>
            </div>
            <div className="content_box">
                <Form name="control-hooks" className="label_cb_wrap">
                    <Form.Item label="Fab" >
                        <Select
                            allowClear
                            onFocus={getFabDatas}
                            // defaultValue={selectedItems.fab}
                            onChange={(value) => cbChange('fab', value)}
                            value={selectedItems.fab}
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
                <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                    <Form.Item label="Product ID" >
                        <Select
                            allowClear
                            onFocus={getProductDatas}
                            // defaultValue={selectedItems.product}
                            onChange={(value) => cbChange('product', value)}
                            value={selectedItems.product}
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
                <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                    <Form.Item label="Operation ID" >
                        <Select
                            allowClear
                            onFocus={getOperationDatas}
                            defaultValue={selectedItems.operation}
                            onChange={(value) => cbChange('operation', value)}
                            value={selectedItems.operation}
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
                <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                    <Form.Item label="Meas. Recipe" >
                        <Select
                            allowClear
                            onFocus={getMeasureRecipeDatas}
                            // defaultValue={selectedItems.measureRecipe}
                            onChange={(value) => cbChange('measureRecipe', value)}
                            value={selectedItems.measureRecipe}
                        >
                            {
                                measureRecipes?.map(item => (
                                    <Option value={item} key={item}>{item}</Option>
                                )

                                )
                            }

                        </Select>
                    </Form.Item>
                </Form>
                <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                    <Form.Item label="AIMS Recipe" >
                        <Select
                            allowClear
                            onFocus={getAIMSRecipeDatas}
                            // defaultValue={selectedItems.measureRecipe}
                            onChange={(value) => cbChange('aimsRecipe', value)}
                            value={selectedItems.aimsRecipe}
                        >
                            {
                                aimsRecipes?.map(item => (
                                    <Option value={item} key={item}>{item}</Option>
                                )

                                )
                            }

                        </Select>
                    </Form.Item>
                </Form>
                <Form name="control-hooks" className='period_wrap b_mt-6'>
                    <Form.Item label="Period" >
                        <RangePicker />
                    </Form.Item>
                </Form>
                <div className="cnt_box">
                    <div className="action-btn">
                        <span className="pt_4">Lot & wafer</span>
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
                <div className="content btn_cnt b_mt-10">
                    <Button>Recipe Verification</Button>
                </div>
            </div>
            <div className={!showFilter ? 'header act_on' : 'header'}>
                <div className="section_title" onClick={() => onClickTab('result')}>
                    <div className="title-rectangle"></div>
                    <span>Verification Result</span>
                </div>
            </div>
            <div className="logo_wrap">
                <img src={logo_Union} alt="" />
                <span>Gauss Manufacturing AI</span>
            </div>
        </div>

    )
}

export default RecipeVerificationTab
