import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { app, auth } from './firebase-config.js';

// UI elements
const btnLogin = document.getElementById('btn-login');
const btnLogout = document.getElementById('btn-logout');
const productList = document.getElementById('product-list');
const template = document.getElementById('product-template');

const products = [
  {title:'Blue T‑Shirt', price:299, img:'https://picsum.photos/seed/tshirt/80'},
  {title:'Wireless Earbuds', price:999, img:'https://picsum.photos/seed/earbuds/80'},
  {title:'Organic Rice 5kg', price:450, img:'https://picsum.photos/seed/rice/80'},
  {title:'Wall Painting', price:799, img:'https://picsum.photos/seed/wall/80'}
];

function renderProducts(){
  products.forEach(p=>{
    const node = template.content.cloneNode(true);
    node.querySelector('img').src = p.img;
    node.querySelector('img').alt = p.title;
    node.querySelector('.title').textContent = p.title;
    node.querySelector('.price').textContent = `₹${p.price}`;
    node.querySelector('.btn-add').addEventListener('click',()=>alert('Added '+p.title));
    productList.appendChild(node);
  });
}

renderProducts();

// auth
const provider = new GoogleAuthProvider();

btnLogin.addEventListener('click',()=>{
  signInWithPopup(auth,provider).catch(err=>alert(err.message));
});

btnLogout.addEventListener('click',()=>signOut(auth));

onAuthStateChanged(auth,user=>{
  if(user){
    btnLogin.style.display='none';
    btnLogout.style.display='inline-block';
  }else{
    btnLogin.style.display='inline-block';
    btnLogout.style.display='none';
  }
});
