import React, { useState } from 'react'
import icon_arrow_l from '../../assets/images/icon_arrow_l.png'
import icon_arrow_r from '../../assets/images/icon_arrow_r.png'
import icon_download from '../../assets/images/icon_download.png'
import icon_location from '../../assets/images/icon_location.png'


import { Form, Button, Select } from 'antd';


const { Option } = Select;

const RecipeVerificationResultImage = (props) => {


    const [measureImages, setMeasureImages] = useState(
        props.data
    );

    const [currMeasureImagePos, setCurrMeasureImagePos] = useState(0);
    const onPrev = () => {
        if (currMeasureImagePos - 2 >= 0) {
            setCurrMeasureImagePos(currMeasureImagePos - 2);
        }
    }
    const onNext = () => {
        if (currMeasureImagePos + 2 < measureImages.length) {
            setCurrMeasureImagePos(currMeasureImagePos + 2);
        }
    }

    return (
        <div className="content">
            <div className="sub_title">
                <span>Measured Image</span>
            </div>
            <div className="action-box">
                <Form name="control-hooks" className='label_cb_wrap'>
                    <Form.Item label="Parameter name" >
                        <Select
                            allowClear
                        >
                            <Option value="">Text/number</Option>
                            <Option value="">Text/number</Option>
                            <Option value="">Text/number</Option>
                        </Select>
                    </Form.Item>
                </Form>
                <div className="action-button">
                    <Button className="img_btn"><img src={icon_location} alt="" /></Button>
                    <Button><img src={icon_download} alt="" />All image</Button>
                </div>
            </div>
            <div className="flex-row img_chart_frame">
                <div className="img_chart_box">
                    <div className="img_box">
                        <span>image{(currMeasureImagePos + 1).toString().padStart(2, '0')}</span>
                        <img src={measureImages[currMeasureImagePos].url} alt="" />
                    </div>
                    <div className="chart_box">
                        <ul>
                            <li>
                                <span className="chart_title">Image file name</span>
                                <span className="chart_content">{measureImages[currMeasureImagePos].name}</span>
                            </li>
                            <li>
                                <span className="chart_title">parameter / value</span>
                                <span className="chart_content">{measureImages[currMeasureImagePos].value.toFixed(2)}</span>
                            </li>
                            <li>
                                <span className="chart_title">Anomaly score</span>
                                <span className="chart_content">{measureImages[currMeasureImagePos].score.toFixed(2)}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {currMeasureImagePos + 2 <= measureImages.length &&

                    <div className="img_chart_box">
                        <div className="img_box">
                            <span>image{(currMeasureImagePos + 2).toString().padStart(2, '0')}</span>
                            <img src={measureImages[currMeasureImagePos + 1].url} alt="" />
                        </div>
                        <div className="chart_box">
                            <ul>
                                <li>
                                    <span className="chart_title">Image file name</span>
                                    <span className="chart_content">{measureImages[currMeasureImagePos + 1].name}</span>
                                </li>
                                <li>
                                    <span className="chart_title">parameter / value</span>
                                    <span className="chart_content">{measureImages[currMeasureImagePos].value.toFixed(2)}</span>
                                </li>
                                <li>
                                    <span className="chart_title">Anomaly score</span>
                                    <span className="chart_content">{measureImages[currMeasureImagePos].score.toFixed(2)}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
            <div className="flex-row btn_box">
                <div className="action-button toggle_button btn_section">
                    <Button className="btn_on">Point</Button>
                    <Button>Wafer</Button>
                </div>
                <div className="action-button jc_center btn_section">
                    <Button disabled={currMeasureImagePos === 0} onClick={onPrev} ><img src={icon_arrow_l} alt="" />Previous</Button>
                    <Button disabled={currMeasureImagePos + 1 === measureImages.length || currMeasureImagePos + 2 === measureImages.length} onClick={onNext}>Next<img src={icon_arrow_r} alt="" /></Button>
                </div>
                <div className="page_num">
                    <dl>
                        <dt>Point</dt>
                        <dd>
                            <span>{Math.ceil((currMeasureImagePos + 1) / 2)}</span>
                            <span>/</span>
                            <span>{Math.ceil(measureImages.length / 2)}</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Wafer</dt>
                        <dd>
                            <span>{Math.ceil((currMeasureImagePos + 1) / 2)}</span>
                            <span>/</span>
                            <span>{Math.ceil(measureImages.length / 2)}</span>
                        </dd>
                    </dl>
                </div>
            </div>

        </div>
    )
}

export default RecipeVerificationResultImage
