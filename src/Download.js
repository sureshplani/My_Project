import React from 'react'
import './App.css'
function Download() {

  const handleDownload = () => {
     fetch("Suresh Palanichamy Resume.pdf").then(response => response.blob()
     .then(blob =>
     { const fileURL = window.URL.createObjectURL(blob)
       let link = document.createElement("a")
       link.href = fileURL
       link.download = "SureshPalanichamyResume.pdf"
       link.click()}
       ))
  }
  return (
    <div className='download'>
         <p>Click Below The Download Button To Download My Resume</p>
         <br/>
         <button onClick={handleDownload}  className='down-btn'>Download</button>
     </div>
  )
}

export default Download