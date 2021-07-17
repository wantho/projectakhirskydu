import React, { Component } from 'react';
import Gambar2 from '../images/gbrprofile.png';
import Hapus from '../images/icons8_delete.png';
import './Editprofil.css';

 class Editprofil extends Component {
    render() {
        return (
            <div>
                <div className="boxedit">
                    <div className="boxedit1">
                        <h3 className="edit">Ubah Profil <span> <img id="a32" src={Hapus} alt ="" /> </span></h3>
                         <hr />
                         <img id="a33" src={Gambar2} />
                         <div className="ubahfoto">
                                <h3 className="ubah">Ubah Foto Profil</h3>
                         </div>
                         <div className="namaprofil">
                             <h3 className="nama">Andika Amri </h3>
                         </div>
                         <div className="deskripsi">
                             <h3 className="penjelasan">Deskripsi </h3>
                         </div>
                         <button type="button" class="btn ">Ubah Profil</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Editprofil;
