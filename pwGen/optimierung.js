var item1={
    name:"item1",
    m:2451,
    n:40,
    max:205,
    anz:0
}

var item2={
    name:"item2",
    m:2978,
    n:35,
    max:420,
    anz:0
}

var item3={
    name:"item3",
    m:3625,
    n:80,
    max:450,
    anz:0
}

var item4={
    name:"item4",
    m:717,
    n:30,
    max:60,
    anz:0

}

var item5={
    name:"item5",
    m:988,
    n:60,
    max:157,
    anz:0

}

var item6={
    name:"item6",
    m:1220,
    n:65,
    max:220,
    anz:0

}

var item7={
    name:"item7",
    m:1405,
    n:40,
    max:620,
    anz:0

}

var item8={
    name:"item8",
    m:1455,
    n:40,
    max:250,
    anz:0

}

var item9={
    name:"item9",
    m:1690,
    n:45,
    max:540,
    anz:0

}

var item10={
    name:"item10",
    m:1980,
    n:68,
    max:370,
    anz:0

}



var itemList=[
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10
]


auto1={
    gewicht:85.3,
    gewichtMax:1000,
    nutzen:0,
    items:[]
}

auto2={
    gewicht:72.4,
    gewichtMax:1000,
    nutzen:0,
    items:[]
}












function calcCar(car){
    car.gewicht=0;
    car.nutzen=0;
    car.items.forEach(element => {
        car.gewicht+=element.m*element.anz
        car.nutzen+=element.n*element.anz
 
    });

    return car
}
