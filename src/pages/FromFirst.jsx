import { useNavigate } from 'react-router-dom';
import HeaderBase from '../component/atoms/HeaderBase';

function FromFirst() {
    // 画面遷移用フック
    const navigate = useNavigate();

    return (
        <div>
            <HeaderBase>
                <div className='backBtn' onClick={() => navigate('/')}>＜</div>
                <div id='pageTitle'>1からレシピ選択</div>
            </HeaderBase>
            <main></main>
        </div>
    )
}

export default FromFirst;