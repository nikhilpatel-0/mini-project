let arr = [
    {
        team:'CSK',
        primary:'yellow',
        secondary:'green'
    },
    {
        team:'MI',
        primary:'blue',
        secondary:'gold'
    },
    {
        team:'RCB',
        primary:'red',
        secondary:'gold'
    },
    {
        team:'KKR',
        primary:'purple',
        secondary:'golg'
    },
    {
        team:'RR',
        primary:'pink',
        secondary:'blue'
    },
    {
        team:'SRH',
        primary:'orange',
        secondary:'black'
    },
    {
        team:'DC',
        primary:'blue',
        secondary:'red'
    },
    {
        team:'LSG',
        primary:'yellow',
        secondary:'green'
    },
    {
        team:'GT',
        primary:'lightblue',
        secondary:'darkblue'
    },
    {
        team:'PBKS',
        primary:'red',
        secondary:'silver'
    }
]

let btn = document.querySelector('button')
let h1 = document.querySelector('h1')

btn.addEventListener('click', function(){
    let num = Math.floor(Math.random()*arr.length)

    let winner = arr[num]

    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.primary
    h1.style.color = winner.secondary
})