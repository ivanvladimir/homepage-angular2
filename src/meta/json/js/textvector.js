/**
 * Ivan V. Meza para el blog
*/

function wjaccardf(textid1,textid2,id)
{
	var text1   = document.getElementById(textid1).value;
    var text2   = document.getElementById(textid2).value;
	var wcounts1 = vector(text1);
	var wcounts2 = vector(text2);

    var a={};
    var b={};
    var ckeys={};
    var tkeys={};

    for (word in wcounts1) {
        a[wcounts1[word].text]=wcounts1[word].frequency;
        tkeys[wcounts1[word].text]=wcounts1[word].frequency;
	}

    for (word in wcounts2) {
        b[wcounts2[word].text]=wcounts2[word].frequency;
        tkeys[wcounts2[word].text]=wcounts2[word].frequency;
	}

    var num=0
    var den=0
    var tmp1=0
    var tmp2=0
    for (word in a) {
        if(word in b){
            num+=Math.min(a[word],b[word]);
        }
        tmp1=a[word] ? a[word] : 0;
        tmp2=b[word] ? b[word] : 0;
        den+=Math.max(tmp1,tmp2);
	}

    var dis=1;
    if(den>0){
     var dis=1-num/den;
    }
    document.getElementById(id).innerHTML = "La distancia es: "+dis.toFixed(4);
}


function wh0f(textid1,textid2,id)
{
	var text1   = document.getElementById(textid1).value;
    var text2   = document.getElementById(textid2).value;
	var wcounts1 = vector(text1);
	var wcounts2 = vector(text2);

    var a={};
    var b={};
    var ckeys={};
    var tkeys={};

    for (word in wcounts1) {
        a[wcounts1[word].text]=wcounts1[word].frequency;
        tkeys[wcounts1[word].text]=wcounts1[word].frequency;
	}

    for (word in wcounts2) {
        b[wcounts2[word].text]=wcounts2[word].frequency;
        tkeys[wcounts2[word].text]=wcounts2[word].frequency;
	}

    var num=0
    var den=0
    var tmp1=0
    var tmp2=0
    for (word in a) {
        if(word in b){
            num+=Math.min(a[word],b[word]);
            tmp1=a[word] ? a[word] : 0;
            tmp2=b[word] ? b[word] : 0;
            den+=Math.max(tmp1,tmp2);
        }
    }

    var dis=1;
    if(den>0){
     var dis=1-num/den;
    }
    document.getElementById(id).innerHTML = "La distancia es: "+dis.toFixed(4);
}


function weuclidianf(textid1,textid2,id)
{
	var text1   = document.getElementById(textid1).value;
    var text2   = document.getElementById(textid2).value;
	var wcounts1 = vector(text1);
	var wcounts2 = vector(text2);

    var a={};
    var b={};
    var ckeys={};
    var tkeys={};

    for (word in wcounts1) {
        a[wcounts1[word].text]=wcounts1[word].frequency;
        tkeys[wcounts1[word].text]=wcounts1[word].frequency;
	}

    for (word in wcounts2) {
        b[wcounts2[word].text]=wcounts2[word].frequency;
        tkeys[wcounts2[word].text]=wcounts2[word].frequency;
	}

    var num=0;
    var den=0;
    var tmp1=0;
    var tmp2=0;
    for (word in tkeys) {
            tmp1=a[word] ? a[word] : 0;
            tmp2=b[word] ? b[word] : 0;
            den+=Math.pow(tmp2-tmp1,2);
    }


    var dis=0;
    if(den>0){
     var dis=Math.sqrt(den)/den;
    }
    document.getElementById(id).innerHTML = "La distancia es: "+dis.toFixed(4);
}


function dot(aa,bb,tkeys)
{
    res=0
    for (word in tkeys) {
            tmp1=aa[word] ? aa[word] : 0;
            tmp2=bb[word] ? bb[word] : 0;
            res+=tmp2*tmp1;
    }
    return res;

}

function wcosinef(textid1,textid2,id)
{
	var text1   = document.getElementById(textid1).value;
    var text2   = document.getElementById(textid2).value;
	var wcounts1 = vector(text1);
	var wcounts2 = vector(text2);

    var a={};
    var b={};
    var ckeys={};
    var tkeys={};

    for (word in wcounts1) {
        a[wcounts1[word].text]=wcounts1[word].frequency;
        tkeys[wcounts1[word].text]=wcounts1[word].frequency;
	}

    for (word in wcounts2) {
        b[wcounts2[word].text]=wcounts2[word].frequency;
        tkeys[wcounts2[word].text]=wcounts2[word].frequency;
	}

    num=dot(a,b,tkeys);
    den=Math.sqrt(dot(a,a,tkeys))*Math.sqrt(dot(b,b,tkeys))

    var dis=1;
    if(den>0){
     var dis=Math.sqrt(den)/den;
    }
    document.getElementById(id).innerHTML = "La distancia es: "+dis.toFixed(4);
}


function wmasif(textid1,textid2,id)
{
	var text1   = document.getElementById(textid1).value;
    var text2   = document.getElementById(textid2).value;
	var wcounts1 = vector(text1);
	var wcounts2 = vector(text2);

    var a={};
    var b={};
    var ckeys={};
    var tkeys={};

    for (word in wcounts1) {
        a[wcounts1[word].text]=wcounts1[word].frequency;
        tkeys[wcounts1[word].text]=wcounts1[word].frequency;
	}

    for (word in wcounts2) {
        b[wcounts2[word].text]=wcounts2[word].frequency;
        tkeys[wcounts2[word].text]=wcounts2[word].frequency;
	}

    var num=0
    var den=0
    var tmp1=0
    var tmp2=0
    for (word in a) {
        if(word in b){
            num+=Math.min(a[word],b[word]);
        }
	}
    for (word in a) {
        tmp1+=a[word];
	}
	for (word in b) {
        tmp2+=b[word];
	}
    den=Math.max(tmp1,tmp2);

    var dis=1;
    if(den>0){
     var dis=1-num/den;
    }
    document.getElementById(id).innerHTML = "La distancia es: "+dis.toFixed(4);
}

function woverlapf(textid1,textid2,id)
{
	var text1   = document.getElementById(textid1).value;
    var text2   = document.getElementById(textid2).value;
	var wcounts1 = vector(text1);
	var wcounts2 = vector(text2);

    var a={};
    var b={};
    var ckeys={};
    var tkeys={};

    for (word in wcounts1) {
        a[wcounts1[word].text]=wcounts1[word].frequency;
        tkeys[wcounts1[word].text]=wcounts1[word].frequency;
	}

    for (word in wcounts2) {
        b[wcounts2[word].text]=wcounts2[word].frequency;
        tkeys[wcounts2[word].text]=wcounts2[word].frequency;
	}

    var num=0
    var den=0
    var tmp1=0
    var tmp2=0
    for (word in a) {
        if(word in b){
            num+=Math.min(a[word],b[word]);
        }
        tmp1+=a[word] ? a[word] : 0;
        tmp2+=b[word] ? b[word] : 0;
	}
    den=Math.min(tmp1,tmp2);

    var dis=1;
    if(den>0){
     var dis=1-num/den;
    }
    document.getElementById(id).innerHTML = "La distancia es: "+dis.toFixed(4);
}


function wsorensenf(textid1,textid2,id)
{
	var text1   = document.getElementById(textid1).value;
    var text2   = document.getElementById(textid2).value;
	var wcounts1 = vector(text1);
	var wcounts2 = vector(text2);

    var a={};
    var b={};
    var ckeys={};
    var tkeys={};
    var den=0

    for (word in wcounts1) {
        a[wcounts1[word].text]=wcounts1[word].frequency;
        den+=wcounts1[word].frequency;
	}

    for (word in wcounts2) {
        b[wcounts2[word].text]=wcounts2[word].frequency;
        den+=wcounts2[word].frequency;
	}

    var num=0
    var tmp1=0
    var tmp2=0
    for (word in a) {
        if(word in b){
            num+=a[word]+b[word];
        }
	}

    var dis=1;
    if(den>0){
     var dis=1-num/den;
    }
    document.getElementById(id).innerHTML = "La distancia es: "+dis.toFixed(4);
}



function jaccardf(textid1,textid2,id)
{
	var text1   = document.getElementById(textid1).value;
    var text2   = document.getElementById(textid2).value;
	var wcounts1 = vector(text1);
	var wcounts2 = vector(text2);

    var a={};
    var b={};
    var ckeys={};
    var tkeys={};


    for (word in wcounts1) {
        a[wcounts1[word].text]=1;
        tkeys[wcounts1[word].text]=1;
	}

    for (word in wcounts2) {
        b[wcounts2[word].text]=1;
        tkeys[wcounts2[word].text]=1;
	}

    var num=0
    for (word in a) {
        if(word in b){
            num+=1;
        }
	}
 
    var den = Object.keys(tkeys).length;
    var dis=1;
    if(den>0){
     var dis=1-num/den;
    }
    document.getElementById(id).innerHTML = "La distancia es: "+dis.toFixed(4);
}

function overlapf(textid1,textid2,id)
{
	var text1   = document.getElementById(textid1).value;
    var text2   = document.getElementById(textid2).value;
	var wcounts1 = vector(text1);
	var wcounts2 = vector(text2);

    var a={};
    var b={};
    var ckeys={};
    var tkeys={};


    for (word in wcounts1) {
        a[wcounts1[word].text]=1;
	}

    for (word in wcounts2) {
        b[wcounts2[word].text]=1;
	}

    var num=0
    for (word in a) {
        if(word in b){
            num+=1;
        }
	}
 
    var den = Math.min(Object.keys(a).length,Object.keys(b).length);
    var dis=1;
    if(den>0){
     var dis=1-num/den;
    }
    document.getElementById(id).innerHTML = "La distancia es: "+dis.toFixed(4);
}

function masif(textid1,textid2,id)
{

	var text1   = document.getElementById(textid1).value;
    var text2   = document.getElementById(textid2).value;
	var wcounts1 = vector(text1);
	var wcounts2 = vector(text2);

    var a={};
    var b={};
    var ckeys={};
    var tkeys={};


    for (word in wcounts1) {
        a[wcounts1[word].text]=1;
	}

    for (word in wcounts2) {
        b[wcounts2[word].text]=1;
	}

    var num=0
    for (word in a) {
        if(word in b){
            num+=1;
        }
	}
 
    var den = Math.max(Object.keys(a).length,Object.keys(b).length);
    var dis=1;
    if(den>0){
     var dis=1-num/den;
    }
    document.getElementById(id).innerHTML = "La distancia es: "+dis.toFixed(4);
}


function ochaif(textid1,textid2,id)
{
    var text1   = document.getElementById(textid1).value;
    var text2   = document.getElementById(textid2).value;
	var wcounts1 = vector(text1);
	var wcounts2 = vector(text2);

    var a={};
    var b={};
    var ckeys={};
    var tkeys={};


    for (word in wcounts1) {
        a[wcounts1[word].text]=1;
	}

    for (word in wcounts2) {
        b[wcounts2[word].text]=1;
	}

    var num=0
    for (word in a) {
        if(word in b){
            num+=1;
        }
	}
 
    var den = Math.sqrt(Object.keys(a).length*Object.keys(b).length);
    var dis=1;
    if(den>0){
     var dis=1-num/den;
    }
    document.getElementById(id).innerHTML = "La distancia es: "+dis.toFixed(4);
}



function sorensenf(textid1,textid2,id)
{
	var text1   = document.getElementById(textid1).value;
    var text2   = document.getElementById(textid2).value;
	var wcounts1 = vector(text1);
	var wcounts2 = vector(text2);

    var a={};
    var b={};
    var ckeys={};
    var tkeys={};


    for (word in wcounts1) {
        a[wcounts1[word].text]=1;
	}

    for (word in wcounts2) {
        b[wcounts2[word].text]=1;
	}

    var num=0
    for (word in a) {
        if(word in b){
            num+=1;
        }
	}
 
    var den = Object.keys(a).length+Object.keys(b).length
    var dis=1;
    if(den>0){
     var dis=1-2*num/den;
    }
    document.getElementById(id).innerHTML = "La distancia es: "+dis.toFixed(4);
}




function matrixtext(form,id, id2,width, height, square)
{
	var text    = form.inputbox.value;
    var wcounts = datavector(text,width);
	var prev = document.getElementById("svg-"+id);


	if(prev){
		prev.remove();
	}
    var grid = d3.select(id).append("svg:svg")
					.attr('id',"svg-"+id)
                    .attr("width", width)
                    .attr("height", height)
                    .attr("class", "chart");

    var row = grid.selectAll(".row")
                  .data(wcounts)
                .enter().append("svg:g")
                  .attr("class", "row");

    var col = row.selectAll(".cell")
                 .data(function (d) { return d; })
                .enter().append("svg:rect")
                 .attr("class", "cell")
                 .attr("x", function(d) { return d.x; })
                 .attr("y", function(d) { return d.y; })
                 .attr("width", function(d) { return d.width; })
                 .attr("height", function(d) { return d.height; })
                 .style("fill", function(d) {return d.color; })
                 .style("stroke","#000");

	var lista='Cuentas';
	for (var i=0; i < wcounts.length; i++){
		for (var j=0; j < wcounts[i].length; j++){
			if(wcounts[i][j].word.length>0){
				lista +=wcounts[i][j].word+':'+wcounts[i][j].frequency+' ';
			}
		}
	}
    document.getElementById(id2).innerHTML =lista
}


function vector(text)
{
	// Counting the words
	var words = {};
	text.split(/[\s*\.*\,\;\+?\#\|:\-\/\\\[\]\(\)\{\}$%&0-9*]/).map( function(k,v){ words||(words={});words[k]++||(words[k]=1); } )

	var arrwords = [];
	for (word in words) {
		if (word.length > 0){
			arrwords.push({
				text: word,
				frequency: words[word]
			});
		}
	}
	return arrwords;
}


function datavector(text,gridWidth)
{
	// Counting the words
	var words = {};
	text.split(/[\s*\.*\,\;\+?\#\|:\-\/\\\[\]\(\)\{\}$%&0-9*]/).map( function(k,v){ words||(words={});words[k]++||(words[k]=1); } )

	var arrwords = [];
	var max = 0;
	for (word in words) {
		if (word.length > 0){
			arrwords.push({
				text: word,
				frequency: words[word]
			});
			max = words[word]> max ? words[word] : max;
		}
	}


	var counts= arrwords.sort(function(a,b){
		return (a.frequency > b.frequency) ? -1 : ((a.frequency < b.frequency) ? 1 : 0);
	});
	counts=counts.slice(0,100)

    var data = new Array();
    var gridItemSize = gridWidth / 10;
    var stepX = gridItemSize;
    var stepY = gridItemSize;
    var xpos = 0;
    var ypos = 0;
    var newValue = 0;
    var count = 0;

    for (var index_a = 0; index_a < 10; index_a++)
    {
        data.push(new Array());
        for (var index_b = 0; index_b < 10; index_b++)
        {
            newValue = Math.round(Math.random() * (100 - 1) + 1);
			if(counts[count]){
				data[index_a].push({ 
									time: index_b, 
									value: newValue,
									width: gridItemSize,
									height: gridItemSize,
									x: xpos,
									y: ypos,
									count: count,
									frequency: counts[count]['frequency'],
									word: counts[count]['text'],
									color: d3.rgb(counts[count]['frequency']*205/max+50,counts[count]['frequency']*205/max+50,0)
							});
			}else{
					data[index_a].push({ 
									time: index_b, 
									value: newValue,
									width: gridItemSize,
									height: gridItemSize,
									x: xpos,
									y: ypos,
									count: count,
									frequency: 0,
									word: "",
									color: d3.rgb(0,0,0)
							});
	
				
			}
			xpos += stepX;
            count += 1;
        }
        xpos = 0;
        ypos += stepY;
    }
    return data;
}
