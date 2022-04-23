import React from 'react'
import './RecipeVerification.css'
import { Form, Input, Button, Checkbox, Select } from 'antd';
const { Option } = Select;
const RecipeVerification = () => {
    return (
        <div class="container flex-row">
            <div class="search-filter">
                <div class="header"></div>
                <div class="content"></div>
            </div>
            <div class="content">

                <div class="section-title flex-row flex-row-center"><div class="title-rectange"></div><span>Verification Result</span></div>
                <div class="action-box ">
                    <div class="action-select">
                        <Form name="control-hooks">

                            <Form.Item name="gender" label="Gender" >
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
                    <div class="action-button">
                        <Button>Default Button1</Button>
                        <Button>Default Button2</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeVerification
