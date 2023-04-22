import React from "react";
import World from '../images/World.png'
import World2 from '../images/World2.png'


const WorldMap = () => {





    
return (
    <div>
        <img src={World2} usemap="#image-map"/>
                {/* <!-- Image Map Generated by http://www.image-map.net/ --></div> */}
                {/* <map name="image-map">
                    <area target="_blank" alt="africa2" title="africa2" href="http://localhost:3001/africa" coords="367,417,522,350" shape="rect"/>
                    <area target="_blank" alt="antarctica2" title="antarctica2" href="http://localhost:3001/antarctica" coords="286,613,542,665" shape="rect"/>
                    <area target="_blank" alt="asia2" title="asia2" href="http://localhost:3001/asia" coords="548,196,670,331" shape="rect"/>
                    <area target="_blank" alt="australia2" title="australia2" href="http://localhost:3001/australia" coords="639,431,750,537" shape="rect"/>
                    <area target="_blank" alt="europe2" title="europe2" href="http://localhost:3001/Europe" coords="534,183,370,274" shape="rect"/>
                    <area target="_blank" alt="northam2" title="northam2" href="http://localhost:3001/NorthAmerica" coords="96,207,270,307" shape="rect"/>
                    <area target="_blank" alt="southam2" title="southam2" href="http://localhost:3001/SouthAmerica" coords="192,518,351,386" shape="rect"/>
                </map> */}
              
                <img src={World} usemap="#image-map"/>
                  <map name="image-map">
                      <area target="_blank" alt="africa" title="Africa" href="http://localhost:3001/africa" coords="364,373,428,390,426,481,445,505,476,493,517,365,485,360,462,311,389,290,354,329,358,350" shape="poly"/>
                      <area target="_blank" alt="southam" title="Southam" href="http://localhost:3001/southamerica" coords="241,363,218,404,228,437,246,455,249,494,244,544,265,566,268,520,285,502,316,460,326,421,294,386,268,367" shape="poly"/>
                      <area target="_blank" alt="antarctica" title="Antarctica" href="http://localhost:3001/antarctica" coords="74,641,150,627,244,615,281,593,276,628,317,647,363,633,416,616,500,617,546,603,621,611,690,607,725,615,781,641,728,650,659,666,514,665,351,664,194,664,95,666" shape="poly"/>
                      <area target="_blank" alt="northam" title="Northam" href="http://localhost:3001/northamerica" coords="50,185,99,193,132,177,169,171,203,150,249,139,308,138,354,142,363,164,337,187,305,221,272,246,237,280,226,322,250,347,229,368,195,354,159,332,133,294,130,255,98,221,72,219,57,240,20,250,62,230,47,224,36,207" shape="poly"/>
                      <area target="_blank" alt="europe" title="Europe" href="http://localhost:3001/europe" coords="409,205,457,185,488,189,520,167,552,184,555,204,544,215,532,243,510,271,496,275,480,271,461,272,437,289,407,272,383,286,375,269,399,261,390,248,390,233,373,238,385,221,404,230,419,236,432,227,411,218" shape="poly"/>
                      <area target="_blank" alt="asia" title="Asia" href="http://localhost:3001/asia" coords="456,279,472,292,469,313,481,329,491,356,514,353,528,339,526,324,535,318,554,333,563,354,575,367,583,374,580,347,592,335,611,329,613,343,622,363,613,382,622,399,632,416,657,426,687,432,709,405,680,365,659,340,668,323,665,303,668,282,687,288,696,309,724,307,718,277,720,264,712,249,707,227,740,221,762,242,789,225,795,209,754,202,703,176,634,169,604,153,556,186,557,196,544,217,535,243,516,269,507,274,485,275,471,273" shape="poly"/>
                      <area target="_blank" alt="australia" title="Australia" href="http://localhost:3001/australia" coords="676,443,669,456,655,463,647,479,651,493,647,506,662,510,681,503,696,499,706,504,707,511,714,522,719,533,769,540,783,523,793,513,789,503,742,494,741,479,734,466,726,450,720,432,748,427,727,409,712,404" shape="poly"/>
                  </map>

    </div>
    
)
}



export default WorldMap;
