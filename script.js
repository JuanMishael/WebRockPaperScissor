/**
 * Data Types
 * @type {Object} attack The buttons that will get users responses
 */

const compoints = document.querySelector('[data-compoints]')
const userpoints = document.querySelector('[data-userpoints]')
const comans = document.querySelector('[data-comans]')
const userans = document.querySelector('[data-userans]')
const attack = document.querySelectorAll('[data-attack]')
const choices = {
    0:'👊',
    1:'🖐️',
    2:'✌️'
}
/**
 *  Will listen to user when button clicked
 *  @param {Object} button The attack buttons 
 */
attack.forEach(button => {
    button.addEventListener('click', e => {
        // console.log(`attacked clicked ${button.innerText}`)  //Just testing if it works lmao
        RandNum = Math.floor(Math.random() * 3)             // this will be the computers choices
        
        comans.innerText = choices[RandNum]                 // this will update the answer field
        userans.innerText = button.innerText

        if((button.innerText=='👊')&&(choices[RandNum]=='✌️') || (button.innerText=='🖐️')&&(choices[RandNum]=='👊')||(button.innerText=='✌️')&&(choices[RandNum]=='🖐️')) {
            //win
            // console.log('Win')
            userpoints.innerText = parseInt(userpoints.innerText) + 1  // this will update the points field of the  user in case you win
        }
        else if((button.innerText=='✌️')&&(choices[RandNum]=='👊') || (button.innerText=='👊')&&(choices[RandNum]=='🖐️')|| (button.innerText=='🖐️')&&(choices[RandNum]=='✌️')){
            //lose
            // console.log('lose')
            compoints.innerText = parseInt(compoints.innerText) + 1     // this will update the points field of the  computer in case you lose
        }
        else{
            //draw
            // console.log('draw')
        }

    })
})