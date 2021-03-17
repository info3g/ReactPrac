import React from 'react'

function ConditionalRendering(){
    return <div>
        <h1>This is ConditionalRendering</h1>
        {/* syntax {
        (()=>{

        })()} */}
        
        {
            (()=>{
              if(false){
                  return <div>
                      <h1>If Done</h1>
                  </div>
              }
              else{
                return <div>
                <h1>Else Done</h1>
            </div>
              }  
            })()


        }
    </div>
}
export default ConditionalRendering