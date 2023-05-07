
import {Routes,Route,Link }from 'react-router-dom';
import {useState} from 'react';
import Home from '../pages/Home';
import Jewelery from '../pages/Jewelery';
import Men from '../pages/Men';
import Women from '../pages/Women';
import Electronics from '../pages/Electronics';
// function Nav()
// {
   
//     return (
//     <div>        
//         <nav class="navbar navbar-expand-md navbar-light bg-light">
//             {/* <div class="wrap">
//                 <div class="search">
//                     <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
//                     <button type="submit" class="searchButton">
//                         <i class="fa fa-search">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//                             </svg>
//                         </i>
//                     </button>
//                 </div>
//             </div> */}
//             <div class="container-fluid">
//                 <a class="navbar-branch" href="/body">
//                     <Link><img src="./src/logo.webp" height="50" alt=""/></Link>
//                 </a>
//                 <div class="collapse navbar-collapse" id="navbarResponsive">
//                     <ul class="navbar-nav ml-5">
//                         <li class="nav-item">
//                             <Link class="nav-link active" to="body">HOME</Link>
//                         </li>
//                         <li class="nav-item">
//                             <Link class="nav-link" to="/forMen">FOR MEN</Link>
//                         </li>
//                         <li class="nav-item">
//                             <Link class="nav-link" to="/forWomen">FOR WOMEN</Link>
//                         </li>
//                         <li class="nav-item">
//                             <Link class="nav-link" to="/jewelery">JEWELERY</Link>
//                         </li>
//                         <li class="nav-item">
//                             <Link class="nav-link" to="/electronics">ELETRONICS</Link> {/**a thanh Link href thanh to */}
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//         <Routes>
//             <Route path="/home" element={<Home/>}/>
//             <Route path="/jewelery" element={<Jewelery/>}/>
//             <Route path="/men" element={<Men/>}/>
//             <Route path="/electronics" element={<Electronics/>}/>
//             <Route path="/women" element={<Women/>}/>
            

//         </Routes>
//     </div>
// );
// }

// export default Nav;
function Nav()
{
   
    return (
    <div>
        
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </i>
                    </button>
                </div> 
            </div>
            <div class="container-fluid">
                <a class="navbar-branch" href="/body">
                    <Link to="/home"><img src="../img/logo.webp" height="50" alt=""/></Link>
                </a>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-5">
                        <li class="nav-item">
                            <Link class="nav-link active" to="">HOME</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/men">MEN</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/women">WOMEN</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/jewelery">JEWELERY</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/electronics">ELETRONICS</Link> {/**a thanh Link href thanh to */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/jewelery" element={<Jewelery/>}/>
            <Route path="/men" element={<Men/>}/>
            <Route path="/electronics" element={<Electronics/>}/>
            <Route path="/women" element={<Women/>}/>
            

        </Routes>
    </div>
);
}

export default Nav;