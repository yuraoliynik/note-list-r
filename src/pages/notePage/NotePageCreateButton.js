import {useDispatch, useSelector} from "react-redux";

import Button from "../../components/button/Button";
import {actionSetAppSetting, actionSetFormNote} from "../../redux/actions";
import {initialDataNote} from "../../data";


function NotePageCreateButton() {
    const {createButtonShow} = useSelector(({appReducer}) => appReducer);

    const dispatch = useDispatch();

    const handleClickCreate = () => {
        dispatch(actionSetAppSetting({
            noteFormShow: 'block',
            createButtonShow: 'none'
        }));

        dispatch(actionSetFormNote(initialDataNote));
    };

    return (
        <div className={'note-page__create-button'} style={{display: createButtonShow}}>
            <Button buttonName={'Create Note'} handleClick={handleClickCreate}/>
        </div>
    )
}

export default NotePageCreateButton;
