import Navbar from '../../Components/Navbar';
import Qod from '../../Components/Qod';
import './aipage.css'
import Difficulty from '../../Components/Difficulty';
import AiComponent from '../../Components/AiComponent';
const AIpage = () => {


    return (
        <>
            <div className='container'>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='main'><AiComponent /></div>
                <div className='qod-box'><Qod /></div>
                <div className='difficulty-box'><Difficulty /></div>
            </div>
        </>
    )
}

export default AIpage
