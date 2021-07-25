import React, { Component } from 'react';
import Spider from '../images/spider.png';
import Titik from '../images/Group50.png';
import Komentar from '../images/Komentar.png';
import Like from '../images/Like.png';
import Share from '../images/Share.png';
import Foto1 from '../images/Rectangle43.png';
import Navbar from './Navbar';
import './Profilteman.css';

 class Profilteman extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="latar">
                     <img id="a34" src ={Spider} />
                    <h4 className="person1">Spiderman <span id="a35">Follow</span></h4> 
                    <h5 className="posting1">364 <span id="a36">posts</span> </h5> 
                    <h5 className="pengikut1">2m <span id="a37">followers</span></h5>
                    <h5 className="mengikuti1">16 <span id="a38">following</span></h5>
                    <p className="pribadi">Your friendly neighborhood spiderman! </p>
                    <div className="profiltmn1">
                         <img id="a39" src ={Spider} />
                          <h4 className="profile1">Spiderman <span> <img id="a40" src={Titik} /></span> </h4>
                          <h5 className="waktu1">45 mins ago</h5>
                          <p className="status1">Being a father is sometimes my hardest but always my most rewarding job. Happy Father’s Day to all dads out there.</p>
                          <img id="a41" src={Like} alt="" />
                          <img id="a42" src={Komentar} alt="" />
                          <img id="a43" src={Share} alt="" />
                    </div>
                    <div className="profiltmn2">
                         <img id="a44" src ={Spider} />
                          <h4 className="profile1_1">Spiderman <span> <img id="a45" src={Titik} /></span> </h4>
                          <h5 className="waktu1_1">June 21, 12:45 pm</h5>
                          <p className="profil1_2">
                            Having fun while cooking and eating variety of foods with <span id="warna1">@Sarah</span>
                          </p>
                         <img id="a46" src={Foto1} />
                    </div>

                </div>

            </div>
        )
    }
}
export default Profilteman;
