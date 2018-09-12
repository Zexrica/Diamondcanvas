var ctx = diamond.getContext('2d'); 

// define t (just so  it exists)
var t = 1;

// coördinates/corner calculation
var coordinates = [];
coordinates.push({
    x: 0,
    y: 150
});
coordinates.push({
    x: 150,
    y: 0
});
coordinates.push({
    x: 300,
    y: 150
});
coordinates.push({
    x: 150,
    y: 300
});
coordinates.push({
    x: 0,
    y: 150
});

// Coördinates/point calculation
function calcWaypoints(coordinates) {
    var waypoints = [];
    for (var i = 1; i < 5; i++) {
        var pt0 = coordinates[i - 1];
        var pt1 = coordinates[i];
        var dx = pt1.x - pt0.x;
        var dy = pt1.y - pt0.y;
        for (var j = 0; j < 100; j++) {
            var x = pt0.x + dx * j / 100;
            var y = pt0.y + dy * j / 100;
            waypoints.push({
                x: x,
                y: y
            });
        }
    }
    return (waypoints);
}

// Animation -- change color every corner
function animate() {
        ctx.strokeStyle = "red";
    if (t > 100 && t <= 200) {
        ctx.strokeStyle = "blue";
    }
    else if (t > 200 && t <= 300) {
        ctx.strokeStyle = "yellow";
    }
    else if (t > 300 && t <= 400) {
        ctx.strokeStyle = "green";
    }

    if (t < points.length - 1) {
        requestAnimationFrame(animate);
    }
    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();
    t++
}

ctx.lineWidth = 3;
var points = calcWaypoints(coordinates);

function DrawDiamond() {
    animate(points);
}