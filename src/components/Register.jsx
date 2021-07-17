import React, { Component } from 'react';
import Hapus from '../images/icons8_delete.png';
import PanahKiri from '../images/leftarrow.png';
import './Register.css';

class Register extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="cardRegister">
                        <img id="register2" src ={PanahKiri} alt="" />
                        <h1 className="daftar" >Daftar <span> <img id="register1" src={Hapus} alt ="" /> </span> </h1>
                        <p className="tagline"> Daftar cepat dan mudah</p>
                        <hr />
                        <div className="register-area">
                            <input type="nama" class="nama" placeholder="Nama"></input>
                            <input type="email" class="email" placeholder="Email"></input>
                            <input type="katasandi" class="katasandi" placeholder="Kata Sandi"></input>
                            <input type="konfirmasi" class="konfirmasi" placeholder="Konfirmasi Kata Sandi"></input>
                            <button type="button" class="button btn-success btn-block">Buat Akun Baru</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;


