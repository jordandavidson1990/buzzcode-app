import React,{Fragment} from 'react'

const ProgressBar = (props) => {

    function progress(){
        var prg = document.getElementById('progress');
        var percent = document.getElementById('percentCount')
        var counter = 5;
        var progress= 25;
        var id = setInterval(frame, 50);

        function frame(){
            if(progress === 500 && counter === 100){
                clearInterval(id);
            }else{
                progress += 5;
                counter += 1;
                prg.style.width = progress + 'px';
                percent.innerHTML = counter + '%';
            }
        }
    }
    
    return(
        <Fragment>
        <div id="percentCount" className="percent-count">100% Complete</div>
        <div className="progress-bar">
        <div className="progress" id="progress">
        </div>
        </div>
        </Fragment>
    )
}

export default ProgressBar