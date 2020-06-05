import React from 'react'
import './Layout.css'
import ProjectItem from './ProjectItem'


class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
            title: "Welcome",
            scposition: window.pageYOffset,
            hobby: false,
            projecti: 1,
            set1: false,
            projectin: [{
                id: 1,
                imag: 'https://cdpn.io/jdiegos/debug/xxGrJVX/bYAdyXKLJbxk',
                tsize: "150%",
                linki: 'https://cdpn.io/jdiegos/debug/xxGrJVX/bYAdyXKLJbxk',
                dispi: 1,
                description: "My attempt at recreating the NBA logo using only CSS in codepen. This was one of my first web related programs which really helped me understand the basics of CSS and how to implement them in HTML."
            },
            {
                id: 2,
                imag: 'lab5',
                linki: 'http://quetzaluno.space/18151/Laboratorio5-Web/Lab5.html',
                tsize: "150%",
                dispi: 0,
                description: "A chat created using only JavaScript. It fetches data from a json file that stores every message sent as well as the user who sent it and creates components accordingly. Unfortunately its not responsive yet so no preview :("

            },
            {
                id: 3,
                imag: 'http://quetzaluno.space/18151/Laboratorio6-Web/Lab6.html',
                linki: 'http://quetzaluno.space/18151/Laboratorio6-Web/Lab6.html',
                dispi: 1,
                tsize: "150%",
                description: "This is a memory card game created with React. It was the first time I used React, but with this game I was able to grasp the countless options it provides with its states and VirtualDOM. "
            },
            {
                id: 4,
                imag: 'https://www.youtube.com/embed/57Wcqge-cjc',
                linki: 'https://github.com/JDiegoS/Flixem2',
                dispi: 2,
                tsize: "110%",
                description: "A movie and TV show recommendation system. The program lets the user create an account in which they can set and save various preferences. The program then finds movies and " +
                    "series that meet those preferences and shows them in dynamic elements. The user can also explore different options using the search or discussion functions to decide which movie to watch." + 
                    " It was developed with React, but also uses corse and express to communicate and manipulate data from a Postgres database. (Spanish audio)"
            }
            
        ]

        }
        this.scrollP = this.scrollP.bind(this);
        this.switchP = this.switchP.bind(this);
    }

    componentDidMount(){
        const ele = document.getElementById('mai')
        ele.addEventListener('scroll', this.scrollP)
        
    }

    switchP(num){
        if((this.state.projecti == 4 && num == 1) || (this.state.projecti == 1 && num == -1)){
            num = 0
        }

        this.setState({projecti: this.state.projecti + num})
    }
    scrollP(){
        const ele = document.getElementById('mai')
        var ho1 = document.querySelector('#hobbs')
        var ho2 = ho1.querySelectorAll('img')
        
        if(ele.scrollLeft != 0){
            ele.scrollLeft = 0
        }
        if (ele.scrollTop < 300){
            this.setState({title: "Welcome"})
            if (this.state.hobby == true){
                this.setState({hobby: false})
                for (var i=0; i<ho2.length; i++)
                    ho2[i].classList.toggle('tra')
            }
        }
        else if (ele.scrollTop < 1400){
            this.setState({title: "Hobbies"})
            if (this.state.hobby == false){
                this.setState({hobby: true})
                for (var i=0; i<ho2.length; i++)
                    ho2[i].classList.toggle('tra')
            }
        }
        else if (ele.scrollTop < 2300){
            this.setState({title: "Web Projects"})
            if (this.state.hobby == true){
                this.setState({hobby: false})
                for (var i=0; i<ho2.length; i++)
                    ho2[i].classList.toggle('tra')
            }
            
        }
        else{
            this.setState({title: "Contact Me"})
            }
            
        
    }
    render(){
        const projectList = this.state.projectin.map(item => <ProjectItem key={item.id} item={item} switchP={this.switchP} page={this.state.projecti} />)

        return(
            <div>
                <div className='Head1'>
                    <h1 className="Text1">
                        {this.state.title}
                    </h1>
                </div>
                <div id="mai" className="Main">
                    <div style={{width: "100%", marginTop: "5%"}}>
                        <p className='Text2'>
                            Thanks for visiting my personal webiste! <br></br> <br></br>
                        </p>
                        <div className="Grids">
                            <p className='Text3' style={{width: "80%"}}>
                                My name is Juan Diego Solorzano. I am 20 years old and live in Guatemala, where I was born.
                                I am currently studying Computer Science at Universidad del Valle de Guatemala.
                            </p>
                            <img style={{ height: "100%", width:"50%", paddingLeft: "10%"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Guatemala_%28orthographic_projection%29.svg/250px-Guatemala_%28orthographic_projection%29.svg.png'>
                            </img>
                        </div>
                    </div>
                    <div >
                        <p className='Text3' style={{paddingTop: "5%" , paddingLeft: "0"}}>
                            My hobbies involve
                        </p>
                        <div className="Grids2" style={{ height: "5%", margin: "0", paddingLeft:'3%'}}>
                            <p className='Text3' style={{paddingTop: "5%" , paddingLeft: "0"}}>
                                Sports
                            </p>
                            <p className='Text3' style={{paddingTop: "5%" , paddingLeft: "0"}}>
                                Movies/TV
                            </p>
                            <p className='Text3' style={{paddingTop: "5%" , paddingLeft: "0"}}>
                                Videogames
                            </p>
                        </div>
                        <div id='hobbs' className='Grids2' >
                            <div style={{display: "grid"}}>
                                <img className="hob1" src='https://townsquare.media/site/696/files/2020/03/GettyImages-633955604-e1585312435104.jpg?w=980&q=75'></img>
                                <img className="hob1" src='https://www.guatemala.com/fotos/2020/05/Hora-y-canal-para-ver-en-Guatemala-el-partido-Union-Berlin-vs.-Bayern-Munich-mayo-2020-885x500.jpg'></img>

                            </div>
                            <div style={{display: "grid"}}>
                                <img className="hob2" src='https://images.amcnetworks.com/amc.com/wp-content/uploads/2012/06/BB_S5B_004_L.jpg'></img>
                                <img className="hob2" src='https://blabla1.eu/VideoBuff/wp-content/uploads/2018/12/Inception.jpg'></img>
                            </div>
                            <div style={{display: "grid"}}>
                                <img className="hob3" src='https://www.yosoyungamer.com/wp-content/uploads/2019/11/god-of-war-1.jpg'></img>
                                <img className="hob3" src='https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x.jpg'></img>
                            </div>
                        </div>
                        <div className="Grids2" style={{ height: "30%", margin: "0", paddingLeft:'3%'}}>
                            <p className='Text3' style={{paddingTop: "5%" , paddingLeft: "0"}}>
                                I love watching sports. I follow the NFL, NBA and any soccer tournament with FC Bayern in it, especially the Champions League.
                                I also enjoy playing these sports with my friends and family.
                            </p>
                            <p className='Text3' style={{paddingTop: "5%" , paddingLeft: "0"}}>
                                I've seen a relatively large ammount of movies and tv series the last couple
                                of years. My favorite TV Shows include Breaking Bad and The Office. While my favorite movies
                                include Shutter Island, Joker and Inception.
                            </p>
                            <p className='Text3' style={{paddingTop: "5%" , paddingLeft: "0"}}>
                                I often play videogames during my freetime with my friends, but rarely play by myself.
                                The games I mostly play are League of Legends, FIFA, GTA and recently God of War.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className='Text3' style={{paddingTop: "8%" , paddingLeft: "0"}}>
                            Of course I also enjoy programming in and out of college <br></br>
                            Here are some of my recent web projects
                        </p>
                        <div style={{ height: "80%", width: "80%", marginLeft: "10%", backgroundColor: "#1f2833", borderRadius: "25px"}}>
                            <div id="projec" style={{overflowY: "hidden", overflowX: "hidden", display: "flex", flexWrap: 'nowrap', width: "400%", height: "100%"}}>
                                {projectList}
                            </div>
                                                        
                        </div>
                        
                    </div>
                    <div>
                        <div style={{height: "55%", width: "90%"}}>
                            <p className='Text3' style={{ padding: "5%"}}>
                                I really enjoy programming projects that involve topics i've learned about in different courses such as<br></br> Flixem (previously demonstrated), but the projects
                                I like the most are developing personal<br></br> video games that will hopefully be published soon. I recently started studying Game Development as a minor <br></br>so I still have a lot to learn and a lot to look forward to.
                            </p>
                            <p className='Text3' style={{ padding: "5%"}}>
                                Well... thats all from me! Thanks again for taking a look at my site. I hope a few things will be updated on this site the next time you visit. <br></br>If you'd like to know more, contact me:
                            </p>
                        </div>
                        <div style={{marginLeft: "45%", marginBottom: "5%"}}>
                            <a href='https://www.facebook.com/diego.solorzano.50'>
                                <img alt="Take me there" src='https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-2-1.png' style={{height: "8%", width: "6%"}}></img>
                            </a>
                            <a href='https://www.linkedin.com/in/juan-diego-solorzano-523187164/'>
                                <img alt="Take me there" src='https://blockchain-logic.com/wp-content/uploads/Linkedin-logo-1-550x550-300x300.png' style={{height: "7%", width: "7%"}}></img>
                            </a>
                            <a href='https://github.com/JDiegoS'>
                                <img alt="Take me there" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyNoFRe_pFDkSYv-_04Gf_8Kcp-GcXuLtU4XlV301EmZwCsv0l&usqp=CAU' style={{height: "8%", width: "7%"}}></img>
                            </a>
                            
                        </div>
                            

                    </div>
                   
                </div>
            </div>
        )
    }
}
export default Layout