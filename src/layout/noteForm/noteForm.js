import {useDispatch, useSelector} from "react-redux";

import "./noteForm.css";
import Button from "../../components/button/Button";
import {noteCategoryNames} from "../../constants";
import {actionSetFormNote} from "../../redux/actions";
import utils from "../../utils";

const noteCategoryNamesArr = Object.values(noteCategoryNames);

function NoteForm({handleClickCancel, handleClickSave}) {
    const {formNote} = useSelector(({noteReducer}) => noteReducer);

    const dispatch = useDispatch();

    const handleChangeForm = (event) => {
        const {target: {name, value}} = event;

        dispatch(actionSetFormNote(
            {
                ...formNote,
                [name]: value
            }
        ))
    };

    const formatCreated = utils.formatInputDate(formNote.created)

    return (
        <div className={'note-form'} style={{}}>
            <div className={'note-form__input-block'}>
                <div className={'note-form__control'}>
                    <input type="text"
                           name={'name'}
                           value={formNote.name}
                           onChange={handleChangeForm}
                    />
                </div>

                <div className={'note-form__control'}>
                    <input type="date"
                           name={'created'}
                           value={formatCreated}
                           onChange={handleChangeForm}
                    />
                </div>

                <div className={'note-form__control'}>
                    <select name={'category'}
                            value={formNote.category}
                            onChange={handleChangeForm}>
                        {
                            noteCategoryNamesArr.map((categoryName, index) => {
                                return (<option key={index}>{categoryName}</option>);
                            })
                        }
                    </select>
                </div>

                <div className={'note-form__control'}>
                    <input type="text"
                           name={'content'}
                           value={formNote.content}
                           onChange={handleChangeForm}
                    />
                </div>
            </div>

            <div className={'note-form__button-block'}>
                <Button buttonName={'Cancel'} handleClick={handleClickCancel}/>
                <Button buttonName={'Save Note'} handleClick={handleClickSave}/>
            </div>
        </div>
    );
}

export default NoteForm;
