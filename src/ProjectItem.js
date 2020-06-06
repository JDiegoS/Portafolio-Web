import React from 'react';
import './Layout.css';
import link2 from './images/link2.png'
import lab5 from './images/lab5.jpg'
import next2 from './images/next2.png'

function ProjectItem(props){

    var trans = 100
    if (props.page == props.item.id){
        
        trans = (props.item.id - 1) * -100
    }
    if (props.page > props.item.id){
        trans = -100 * props.item.id
    }
    var dis = "Grids3 right";
    if(props.page == props.item.id){
            dis = "Grids3";
        
    }
    else if(props.page > props.item.id){
            dis = "Grids3 left";
        
    }
    var imgn = lab5;
    var displi = 'initial'
    var displi2 = 'none'
    var displi3 = 'none'
    if (props.item.dispi == 1){
        displi = 'initial'
        displi2 = 'none'
        displi3 = 'none'
    }
    else if (props.item.dispi == 2){
        displi3 = 'initial'
        displi2 = 'none'
        displi = 'none'
    }
    else{
        displi = 'none'
        displi2 = 'initial'
        displi3 = 'none'
    }

    return(
        <div style={{display: "inline-block", width: "100%", height: "100%"}}>
            <div id={"pro" + props.item.id} className={dis} style={{height: "90%", width: "100%", transform: "translateX(" + trans+ "%)"}}>
                <a className="NextI" onClick={() => {props.switchP(-1)}}>
                    <img src={next2} style={{height: "50%", width: "100%", marginTop: "50%", transform: "rotate(180deg", marginLeft: "10%"}}></img>
                </a>
                <iframe src={props.item.imag} style={{ display: displi, maxHeight: "100%", maxWidth: "100%", objectFit: "fill", height: "90%", width: "90%", marginTop: "auto%"}}></iframe>
                <iframe style={{width: "90%", height:"90%", display: displi3}} src="https://www.youtube.com/embed/57Wcqge-cjc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <img src={imgn} style={{ display: displi2, maxHeight: "100%", maxWidth: "100%", objectFit: "fill", height: "90%", width: "90%", marginTop: "auto", marginBottom: "auto    "}}></img>
                    <p className='Text3' style={{ fontSize: props.item.tsize, width: "80%", paddingTop: "5%" , paddingLeft: "1%"}}>
                        {props.item.description}
                    </p>
                <div>
                    <a className="NextI" onClick={() => {props.switchP(1)}}>
                        <img src={next2} style={{height: "10%", width: "50%", marginTop: "220%", marginRight: "20%"}}></img>
                    </a>
                    <a href={props.item.linki}>
                        <img alt="Take me there" src={link2} style={{height: "12%", width: "55%", marginTop: "150%", marginRight: "20%"}}></img>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectItem;
