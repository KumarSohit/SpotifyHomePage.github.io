// import React, { Component } from "react";


// export default class C3 extends Component{

//  render(){

// return(

//  <div  style={{height:"34vh",backgroundColor:"green"}}>C3</div>



// )


//  }


// }


import React, { Component } from "react";

// import mysong from './Audio/sound.mp3.mp3';

import mysong from './video/video.mp4';




let C3 = () => {
    
    // let song=new Audio(mysong);
    // let isPlaying=false;
    // let handleSong=()=>{
    //     if(isPlaying){
    //         song.pause();
    //     }else{s
    //         song.play();
    //     }
    //     isPlaying=!isPlaying;
    // }
    let song=new Audio(mysong);
    let isPlaying=false;
    let handleSong=()=>{
        if(isPlaying){
            song.pause();
        }else{
            song.play();
        }
        isPlaying=!isPlaying;
    }

    return <div className="song">

        <div className="Originalnav">

            <div className="nav">

                <span className="nav1"><a href="">Premium
               </a></span>

                <div className="mm-men"> 
                   <div>Item1</div>
                   <div>Item1</div>
                   <div>Item1</div>
                   <div>Item1</div>
                
                </div>
                
                <span className="nav1"><a href="">Support</a></span>
                <span className="nav1"><a href="">Download</a></span>
                <span className="nav1"><a href="">|</a></span>

                <span className="nav1"><a href="">Sign Up</a></span>

                <span>
                    <button className="login">Log in</button>
                </span>


            </div>

        </div>


        <div className="second-container">
        <div className="container1">
                <div className="upper-containt">
                    <div className="spot1"><a href="">Focus</a></div>
                    <div className="sp"><a href="">Show all</a></div>

                </div>
                <div className="main-card">
                    <div className="cards" >

                        <div className="image img2">


                   <div  onClick={handleSong}></div>

                        </div>
                        <div id = "mus" onClick={handleSong}></div>
                        <div className="title">
                            <h2>Peaceful Piano</h2>
                        </div>
                        <div className="des">
                            <p>Peaceful Piano to help  you slow down,breathe,and.......</p>
                        </div>

                    </div>

                    <div className="cards">
                        <div className="image img3">
                        </div>
                        <div id = "mus"></div>

                        <div className="title">
                            <h2>Deep Focus</h2>
                        </div>
                        <div className="des">
                            <p>Keep calm and focus with ambient and post-rock........</p>
                        </div>

                    </div>
                    <div className="cards">
                        <div className="image img4">
                        </div>
                        <div id = "mus"></div>

                        <div className="title">
                            <h2>Instrumental Study</h2>
                        </div>
                        <div className="des">
                            <p>Focus with soft study music in the background.......</p>
                        </div>

                    </div>

                    <div className="cards">
                        <div className="image img5">
                        </div>
                        <div id = "mus"></div>

                        <div className="title">
                            <h2>Focus Flow</h2>
                        </div>
                        <div className="des">
                            <p>Uptempo instrumental hip hop beats.......</p>
                        </div>

                    </div>


                    <div className="cards">
                        <div className="image img6">
                        </div>
                        <div id = "mus"></div>

                        <div className="title">
                            <h2>Workday Lounge</h2>
                        </div>
                        <div className="des">
                            <p>Lounge and chill music for your workday......</p>
                        </div>

                    </div>


                </div>
                
            </div>

            <div className="container1">
                <div className="upper-containt">
                    <div className="spot1"><a href="">Spotify Playlist</a></div>
                    <div className="sp"><a href="">Show all</a></div>

                </div>
                <div className="main-card">
                    <div className="cards" >

                        <div className="image img7">
                        </div>
                        <div id = "mus"></div>

                        <div className="title">
                            <h2>Today's Top Hits</h2>
                        </div>
                        <div className="des">
                            <p>Billie Eilish is on top of the Hottest 50!.....</p>
                        </div>

                    </div>

                    <div className="cards">
                        <div className="image img8">
                        </div>
                        <div id = "mus"></div>

                        <div className="title">
                            <h2>RapCaviar</h2>
                        </div>
                        <div className="des">
                            <p>New music from Lil Tjay,Qusvo and JT of city Girls....</p>
                        </div>

                    </div>
                    <div className="cards">
                        <div className="image img9">
                        </div>
                        <div id = "mus"></div>

                        <div className="title">
                            <h2>Rock Classics</h2>
                        </div>
                        <div className="des">
                            <p>Rock legneds & epic songs that continue to inspire........</p>
                        </div>

                    </div>

                    <div className="cards">
                        <div className="image img10">
                        </div>
                        <div id = "mus"></div>

                        <div className="title">
                            <h2>All Out 2010s</h2>
                        </div>
                        <div className="des">
                            <p>The biggest songs of the 2010s.....</p>
                        </div>

                    </div>


                    <div className="cards">
                        <div className="image img11">
                        </div>
                        <div id = "mus"></div>

                        <div className="title">
                            <h2>Chill Hits</h2>
                        </div>
                        <div className="des">
                            <p>Kick back to the best new and recent chill hits.......</p>
                        </div>

                    </div>


                </div>
                
            </div>
            <div className="container1">
                <div className="upper-containt">
                    <div className="spot1"><a href="">Sound of India</a></div>
                    <div className="sp"><a href="">Show all</a></div>

                </div>
                <div className="main-card">
                    <div className="cards" >

                        <div className="image img21">
                        </div>
                        <div id = "mus"></div>

                        <div className="title">
                            <h3>The Sound of Mumb......</h3>
                        </div>
                        <div className="des">
                            <p>The songs that define, unite and distinguish.....</p>
                        </div>

                    </div>

                    <div className="cards">
                        <div className="image img22">
                        </div>
                        <div id = "mus"></div>

                        <div className="title">
                            <h3>The sound of Kolkat....</h3>
                        </div>
                        <div className="des">
                            <p>The songs that define,unite and distinguish......</p>
                        </div>

                    </div>
                    <div className="cards">
                        <div className="image img23">
                        </div>
                        <div id = "mus"></div>

                        <div className="title">
                            <h3>The Sound of Delhi IN</h3>
                        </div>
                        <div className="des">
                            <p>The songs that define,unite and distinguish Delhi......</p>
                        </div>

                    </div>

                    <div className="cards">
                        <div className="image img24">
                        </div>
                        <div id = "mus"></div>

                        <div className="title">
                            <h3>The Sound of Bengal.....</h3>
                        </div>
                        <div className="des">
                            <p>The songs that define,unite and distinguish........</p>
                        </div>

                    </div>


                    <div className="cards">
                        <div className="image img25">
                        </div>
                        <div id = "mus" ></div>

                        <div className="title">
                            <h3>The Sound of Chennai...</h3>
                        </div>
                        <div className="des">
                            <p>The songs that define,unite and distinguish.......</p>
                        </div>

                    </div>


                </div>
                
            </div>

            {/* <div className="container1">
                <div className="upper-containt">
                    <div className="spot1"><a href="">Focus</a></div>
                    <div className="sp"><a href="">Show all</a></div>

                </div>
                <div className="main-card">
                    <div className="cards" >

                        <div className="image img2">
                        </div>
                        <div className="title">
                            <h2>Peaceful Piano</h2>
                        </div>
                        <div className="des">
                            <p>Peaceful Piano to help  you slow down,breathe,and.......</p>
                        </div>

                    </div>

                    <div className="cards">
                        <div className="image img3">
                        </div>
                        <div className="title">
                            <h2>Good Morning</h2>
                        </div>
                        <div className="des">
                            <p>Peaceful Piano to help  you slow down,breathe,and.......</p>
                        </div>

                    </div>
                    <div className="cards">
                        <div className="image img3">
                        </div>
                        <div className="title">
                            <h2>Good Morning</h2>
                        </div>
                        <div className="des">
                            <p>Peaceful Piano to help  you slow down,breathe,and.......</p>
                        </div>

                    </div>

                    <div className="cards">
                        <div className="image img3">
                        </div>
                        <div className="title">
                            <h2>Good Morning</h2>
                        </div>
                        <div className="des">
                            <p>Peaceful Piano to help  you slow down,breathe,and.......</p>
                        </div>

                    </div>


                    <div className="cards">
                        <div className="image img3">
                        </div>
                        <div className="title">
                            <h2>Good Morning</h2>
                        </div>
                        <div className="des">
                            <p>Peaceful Piano to help  you slow down,breathe,and.......</p>
                        </div>

                    </div>


                </div>
                
            </div> */}
            

      
      <div className="main-footer">


        <div className="footer1">

        <span><h4>Company</h4></span>
        <span>About</span>
        <span>Jobs</span>
        <span>For the Record</span>


        </div>


        <div className="footer2">

        <span><h4>Communties</h4></span>
        <span>For Artists</span>
        <span>Developers</span>
        <span>Advertising</span>
        <span>Investors</span>
        <span>Vendors</span>
        <span>Spotify for Work</span>

        </div>





        <div className="footer3">
        <span><h4>Useful Links</h4></span>
        <span>Support</span>
        <span>Free Mobile App</span>

        </div>



        <div>4</div>


      </div>
             

   <footer>
    <div></div>
<hr></hr>
    <span>@coppy</span>
   </footer>





        </div>

    </div>


}
export default C3;
