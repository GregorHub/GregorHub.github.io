



firstRow=[ 0,0,0 ]
secondRow=[ 0,1,0 ]
thirdRow=[ 1,0,1 ]

board=[firstRow,secondRow,thirdRow]

function drawBoard(){


    board.forEach(element => {
        print=""
        element.forEach(element => {
            
            if(element==0){

                print+="[  ]"
                
            }else if(element==1)[
                print+="[ x ]"
            ]


        });

console.log(print)
    });



}

drawBoard()


