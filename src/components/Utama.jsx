import React from 'react';
// import Login from './Login';
import './Utama.css';

const Utama = () => {
    const title= " Skybook";
    const narasi = "Skybook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.";
     
    return (
            <div class="container-fluid">
                <div class="judul">
                    <h1 className="utama">{title}</h1>
                    <p className="text">{narasi}</p>
                </div>
                <div className="box-login">
                   <form >
                       <div className="form-group">
                            <input type="email" class="email" placeholder="Email"></input>
                            <input type="katasandi" class="katasandi" placeholder="Kata Sandi"></input>
                       </div>
                       <button type="button" class="btn1 btn-warning btn-block">LOGIN</button>
                      <hr id="garis" />
                       <button type="button" class="btn2 btn-success center-block">Buat Akun Baru</button>
                   </form>
               </div>
            </div>
    );
};

export default Utama;