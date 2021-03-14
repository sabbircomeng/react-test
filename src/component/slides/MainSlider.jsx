import React from 'react';
import Sliders from './Sliders';

function MainSlider() {      
    return (
        <section className="hm-banner-slider-sec-wrp">
            <Sliders />
            <div className="psearch-form-modiule-wrp clearfix">
                <form method="post">
                    <div className="psearch-form-modiule">
                        <div className="psearch-form">
                            <div className="psearch-form-fields clearfix">
                                <div className="type pfm-item">
                                    <select className="selectpicker" id="cars" name="pstype">
                                        <option value="*">Choose</option>
                                        <option value="type1">Option 1</option>
                                        <option value="type2">Option 2</option>
                                        <option value="type3">Option 3</option>
                                        <option value="type4">Option 4</option>
                                        <option value="type5">Option 5</option>
                                    </select>
                                </div>
                                <div className="locate pfm-item">
                                    <select className="selectpicker" id="cars1" name="pslocate">
                                        <option value="*">Religion</option>
                                        <option value="type1">Option 1</option>
                                        <option value="type2">Option 2</option>
                                        <option value="type3">Option 3</option>
                                        <option value="type4">Option 4</option>
                                        <option value="type5">Option 5</option>
                                    </select>
                                </div>
                                <div className="min-prj pfm-item">
                                    <select className="selectpicker" id="cars2" name="psminprj">
                                        <option value="*">From Height</option>
                                        <option value="type1">Option 1</option>
                                        <option value="type2">Option 2</option>
                                        <option value="type3">Option 3</option>
                                        <option value="type4">Option 4</option>
                                        <option value="type5">Option 5</option>
                                    </select>
                                </div>
                                <div className="max-prj pfm-item">
                                    <select className="selectpicker" id="cars3" name="psmaxprj">
                                        <option value="*">To Height</option>
                                        <option value="type1">Option 1</option>
                                        <option value="type2">Option 2</option>
                                        <option value="type3">Option 3</option>
                                        <option value="type4">Option 4</option>
                                        <option value="type5">Option 5</option>
                                    </select>
                                </div>
                                <div className="max-prj pfm-item">
                                    <select className="selectpicker" id="cars4" name="psmaxprj">
                                        <option value="*">From Age</option>
                                        <option value="type1">Option 1</option>
                                        <option value="type2">Option 2</option>
                                        <option value="type3">Option 3</option>
                                        <option value="type4">Option 4</option>
                                        <option value="type5">Option 5</option>
                                    </select>
                                </div>
                                <div className="max-prj pfm-item">
                                    <select className="selectpicker" id="cars5" name="psmaxprj">
                                        <option value="*">From Age</option>
                                        <option value="type1">Option 1</option>
                                        <option value="type2">Option 2</option>
                                        <option value="type3">Option 3</option>
                                        <option value="type4">Option 4</option>
                                        <option value="type5">Option 5</option>
                                    </select>
                                </div>
                                <div className="max-prj pfm-item">
                                    <select className="selectpicker" id="cars6" name="psmaxprj">
                                        <option value="*">To Age </option>
                                        <option value="type1">Option 1</option>
                                        <option value="type2">Option 2</option>
                                        <option value="type3">Option 3</option>
                                        <option value="type4">Option 4</option>
                                        <option value="type5">Option 5</option>
                                    </select>
                                </div>
                                <div className="max-prj pfm-item">
                                    <select className="selectpicker" id="cars7" name="psmaxprj">
                                        <option value="*">Country</option>
                                        <option value="type1">Option 1</option>
                                        <option value="type2">Option 2</option>
                                        <option value="type3">Option 3</option>
                                        <option value="type4">Option 4</option>
                                        <option value="type5">Option 5</option>
                                    </select>
                                </div>
                                <div className="max-prj pfm-item">
                                    <select className="selectpicker" id="cars8" name="psmaxprj">
                                        <option value="*">Status</option>
                                        <option value="type1">Option 1</option>
                                        <option value="type2">Option 2</option>
                                        <option value="type3">Option 3</option>
                                        <option value="type4">Option 4</option>
                                        <option value="type5">Option 5</option>
                                    </select>
                                </div>
                                <div className="submit zoeken">
                                    <button type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default MainSlider;


