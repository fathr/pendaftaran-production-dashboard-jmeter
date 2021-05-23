/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 118.0, "minX": 0.0, "maxY": 9354.0, "series": [{"data": [[0.0, 118.0], [0.1, 118.0], [0.2, 118.0], [0.3, 118.0], [0.4, 118.0], [0.5, 118.0], [0.6, 118.0], [0.7, 118.0], [0.8, 118.0], [0.9, 118.0], [1.0, 122.0], [1.1, 122.0], [1.2, 122.0], [1.3, 122.0], [1.4, 122.0], [1.5, 122.0], [1.6, 122.0], [1.7, 122.0], [1.8, 122.0], [1.9, 122.0], [2.0, 143.0], [2.1, 143.0], [2.2, 143.0], [2.3, 143.0], [2.4, 143.0], [2.5, 143.0], [2.6, 143.0], [2.7, 143.0], [2.8, 143.0], [2.9, 143.0], [3.0, 157.0], [3.1, 157.0], [3.2, 157.0], [3.3, 157.0], [3.4, 157.0], [3.5, 157.0], [3.6, 157.0], [3.7, 157.0], [3.8, 157.0], [3.9, 157.0], [4.0, 808.0], [4.1, 808.0], [4.2, 808.0], [4.3, 808.0], [4.4, 808.0], [4.5, 808.0], [4.6, 808.0], [4.7, 808.0], [4.8, 808.0], [4.9, 808.0], [5.0, 825.0], [5.1, 825.0], [5.2, 825.0], [5.3, 825.0], [5.4, 825.0], [5.5, 825.0], [5.6, 825.0], [5.7, 825.0], [5.8, 825.0], [5.9, 825.0], [6.0, 833.0], [6.1, 833.0], [6.2, 833.0], [6.3, 833.0], [6.4, 833.0], [6.5, 833.0], [6.6, 833.0], [6.7, 833.0], [6.8, 833.0], [6.9, 833.0], [7.0, 836.0], [7.1, 836.0], [7.2, 836.0], [7.3, 836.0], [7.4, 836.0], [7.5, 836.0], [7.6, 836.0], [7.7, 836.0], [7.8, 836.0], [7.9, 836.0], [8.0, 846.0], [8.1, 846.0], [8.2, 846.0], [8.3, 846.0], [8.4, 846.0], [8.5, 846.0], [8.6, 846.0], [8.7, 846.0], [8.8, 846.0], [8.9, 846.0], [9.0, 849.0], [9.1, 849.0], [9.2, 849.0], [9.3, 849.0], [9.4, 849.0], [9.5, 849.0], [9.6, 849.0], [9.7, 849.0], [9.8, 849.0], [9.9, 849.0], [10.0, 850.0], [10.1, 850.0], [10.2, 850.0], [10.3, 850.0], [10.4, 850.0], [10.5, 850.0], [10.6, 850.0], [10.7, 850.0], [10.8, 850.0], [10.9, 850.0], [11.0, 854.0], [11.1, 854.0], [11.2, 854.0], [11.3, 854.0], [11.4, 854.0], [11.5, 854.0], [11.6, 854.0], [11.7, 854.0], [11.8, 854.0], [11.9, 854.0], [12.0, 859.0], [12.1, 859.0], [12.2, 859.0], [12.3, 859.0], [12.4, 859.0], [12.5, 859.0], [12.6, 859.0], [12.7, 859.0], [12.8, 859.0], [12.9, 859.0], [13.0, 860.0], [13.1, 860.0], [13.2, 860.0], [13.3, 860.0], [13.4, 860.0], [13.5, 860.0], [13.6, 860.0], [13.7, 860.0], [13.8, 860.0], [13.9, 860.0], [14.0, 864.0], [14.1, 864.0], [14.2, 864.0], [14.3, 864.0], [14.4, 864.0], [14.5, 864.0], [14.6, 864.0], [14.7, 864.0], [14.8, 864.0], [14.9, 864.0], [15.0, 869.0], [15.1, 869.0], [15.2, 869.0], [15.3, 869.0], [15.4, 869.0], [15.5, 869.0], [15.6, 869.0], [15.7, 869.0], [15.8, 869.0], [15.9, 869.0], [16.0, 873.0], [16.1, 873.0], [16.2, 873.0], [16.3, 873.0], [16.4, 873.0], [16.5, 873.0], [16.6, 873.0], [16.7, 873.0], [16.8, 873.0], [16.9, 873.0], [17.0, 874.0], [17.1, 874.0], [17.2, 874.0], [17.3, 874.0], [17.4, 874.0], [17.5, 874.0], [17.6, 874.0], [17.7, 874.0], [17.8, 874.0], [17.9, 874.0], [18.0, 875.0], [18.1, 875.0], [18.2, 875.0], [18.3, 875.0], [18.4, 875.0], [18.5, 875.0], [18.6, 875.0], [18.7, 875.0], [18.8, 875.0], [18.9, 875.0], [19.0, 875.0], [19.1, 875.0], [19.2, 875.0], [19.3, 875.0], [19.4, 875.0], [19.5, 875.0], [19.6, 875.0], [19.7, 875.0], [19.8, 875.0], [19.9, 875.0], [20.0, 876.0], [20.1, 876.0], [20.2, 876.0], [20.3, 876.0], [20.4, 876.0], [20.5, 876.0], [20.6, 876.0], [20.7, 876.0], [20.8, 876.0], [20.9, 876.0], [21.0, 876.0], [21.1, 876.0], [21.2, 876.0], [21.3, 876.0], [21.4, 876.0], [21.5, 876.0], [21.6, 876.0], [21.7, 876.0], [21.8, 876.0], [21.9, 876.0], [22.0, 877.0], [22.1, 877.0], [22.2, 877.0], [22.3, 877.0], [22.4, 877.0], [22.5, 877.0], [22.6, 877.0], [22.7, 877.0], [22.8, 877.0], [22.9, 877.0], [23.0, 877.0], [23.1, 877.0], [23.2, 877.0], [23.3, 877.0], [23.4, 877.0], [23.5, 877.0], [23.6, 877.0], [23.7, 877.0], [23.8, 877.0], [23.9, 877.0], [24.0, 878.0], [24.1, 878.0], [24.2, 878.0], [24.3, 878.0], [24.4, 878.0], [24.5, 878.0], [24.6, 878.0], [24.7, 878.0], [24.8, 878.0], [24.9, 878.0], [25.0, 878.0], [25.1, 878.0], [25.2, 878.0], [25.3, 878.0], [25.4, 878.0], [25.5, 878.0], [25.6, 878.0], [25.7, 878.0], [25.8, 878.0], [25.9, 878.0], [26.0, 878.0], [26.1, 878.0], [26.2, 878.0], [26.3, 878.0], [26.4, 878.0], [26.5, 878.0], [26.6, 878.0], [26.7, 878.0], [26.8, 878.0], [26.9, 878.0], [27.0, 878.0], [27.1, 878.0], [27.2, 878.0], [27.3, 878.0], [27.4, 878.0], [27.5, 878.0], [27.6, 878.0], [27.7, 878.0], [27.8, 878.0], [27.9, 878.0], [28.0, 879.0], [28.1, 879.0], [28.2, 879.0], [28.3, 879.0], [28.4, 879.0], [28.5, 879.0], [28.6, 879.0], [28.7, 879.0], [28.8, 879.0], [28.9, 879.0], [29.0, 879.0], [29.1, 879.0], [29.2, 879.0], [29.3, 879.0], [29.4, 879.0], [29.5, 879.0], [29.6, 879.0], [29.7, 879.0], [29.8, 879.0], [29.9, 879.0], [30.0, 880.0], [30.1, 880.0], [30.2, 880.0], [30.3, 880.0], [30.4, 880.0], [30.5, 880.0], [30.6, 880.0], [30.7, 880.0], [30.8, 880.0], [30.9, 880.0], [31.0, 880.0], [31.1, 880.0], [31.2, 880.0], [31.3, 880.0], [31.4, 880.0], [31.5, 880.0], [31.6, 880.0], [31.7, 880.0], [31.8, 880.0], [31.9, 880.0], [32.0, 880.0], [32.1, 880.0], [32.2, 880.0], [32.3, 880.0], [32.4, 880.0], [32.5, 880.0], [32.6, 880.0], [32.7, 880.0], [32.8, 880.0], [32.9, 880.0], [33.0, 881.0], [33.1, 881.0], [33.2, 881.0], [33.3, 881.0], [33.4, 881.0], [33.5, 881.0], [33.6, 881.0], [33.7, 881.0], [33.8, 881.0], [33.9, 881.0], [34.0, 881.0], [34.1, 881.0], [34.2, 881.0], [34.3, 881.0], [34.4, 881.0], [34.5, 881.0], [34.6, 881.0], [34.7, 881.0], [34.8, 881.0], [34.9, 881.0], [35.0, 882.0], [35.1, 882.0], [35.2, 882.0], [35.3, 882.0], [35.4, 882.0], [35.5, 882.0], [35.6, 882.0], [35.7, 882.0], [35.8, 882.0], [35.9, 882.0], [36.0, 883.0], [36.1, 883.0], [36.2, 883.0], [36.3, 883.0], [36.4, 883.0], [36.5, 883.0], [36.6, 883.0], [36.7, 883.0], [36.8, 883.0], [36.9, 883.0], [37.0, 884.0], [37.1, 884.0], [37.2, 884.0], [37.3, 884.0], [37.4, 884.0], [37.5, 884.0], [37.6, 884.0], [37.7, 884.0], [37.8, 884.0], [37.9, 884.0], [38.0, 884.0], [38.1, 884.0], [38.2, 884.0], [38.3, 884.0], [38.4, 884.0], [38.5, 884.0], [38.6, 884.0], [38.7, 884.0], [38.8, 884.0], [38.9, 884.0], [39.0, 884.0], [39.1, 884.0], [39.2, 884.0], [39.3, 884.0], [39.4, 884.0], [39.5, 884.0], [39.6, 884.0], [39.7, 884.0], [39.8, 884.0], [39.9, 884.0], [40.0, 885.0], [40.1, 885.0], [40.2, 885.0], [40.3, 885.0], [40.4, 885.0], [40.5, 885.0], [40.6, 885.0], [40.7, 885.0], [40.8, 885.0], [40.9, 885.0], [41.0, 886.0], [41.1, 886.0], [41.2, 886.0], [41.3, 886.0], [41.4, 886.0], [41.5, 886.0], [41.6, 886.0], [41.7, 886.0], [41.8, 886.0], [41.9, 886.0], [42.0, 887.0], [42.1, 887.0], [42.2, 887.0], [42.3, 887.0], [42.4, 887.0], [42.5, 887.0], [42.6, 887.0], [42.7, 887.0], [42.8, 887.0], [42.9, 887.0], [43.0, 888.0], [43.1, 888.0], [43.2, 888.0], [43.3, 888.0], [43.4, 888.0], [43.5, 888.0], [43.6, 888.0], [43.7, 888.0], [43.8, 888.0], [43.9, 888.0], [44.0, 890.0], [44.1, 890.0], [44.2, 890.0], [44.3, 890.0], [44.4, 890.0], [44.5, 890.0], [44.6, 890.0], [44.7, 890.0], [44.8, 890.0], [44.9, 890.0], [45.0, 890.0], [45.1, 890.0], [45.2, 890.0], [45.3, 890.0], [45.4, 890.0], [45.5, 890.0], [45.6, 890.0], [45.7, 890.0], [45.8, 890.0], [45.9, 890.0], [46.0, 891.0], [46.1, 891.0], [46.2, 891.0], [46.3, 891.0], [46.4, 891.0], [46.5, 891.0], [46.6, 891.0], [46.7, 891.0], [46.8, 891.0], [46.9, 891.0], [47.0, 891.0], [47.1, 891.0], [47.2, 891.0], [47.3, 891.0], [47.4, 891.0], [47.5, 891.0], [47.6, 891.0], [47.7, 891.0], [47.8, 891.0], [47.9, 891.0], [48.0, 893.0], [48.1, 893.0], [48.2, 893.0], [48.3, 893.0], [48.4, 893.0], [48.5, 893.0], [48.6, 893.0], [48.7, 893.0], [48.8, 893.0], [48.9, 893.0], [49.0, 893.0], [49.1, 893.0], [49.2, 893.0], [49.3, 893.0], [49.4, 893.0], [49.5, 893.0], [49.6, 893.0], [49.7, 893.0], [49.8, 893.0], [49.9, 893.0], [50.0, 894.0], [50.1, 894.0], [50.2, 894.0], [50.3, 894.0], [50.4, 894.0], [50.5, 894.0], [50.6, 894.0], [50.7, 894.0], [50.8, 894.0], [50.9, 894.0], [51.0, 895.0], [51.1, 895.0], [51.2, 895.0], [51.3, 895.0], [51.4, 895.0], [51.5, 895.0], [51.6, 895.0], [51.7, 895.0], [51.8, 895.0], [51.9, 895.0], [52.0, 896.0], [52.1, 896.0], [52.2, 896.0], [52.3, 896.0], [52.4, 896.0], [52.5, 896.0], [52.6, 896.0], [52.7, 896.0], [52.8, 896.0], [52.9, 896.0], [53.0, 897.0], [53.1, 897.0], [53.2, 897.0], [53.3, 897.0], [53.4, 897.0], [53.5, 897.0], [53.6, 897.0], [53.7, 897.0], [53.8, 897.0], [53.9, 897.0], [54.0, 897.0], [54.1, 897.0], [54.2, 897.0], [54.3, 897.0], [54.4, 897.0], [54.5, 897.0], [54.6, 897.0], [54.7, 897.0], [54.8, 897.0], [54.9, 897.0], [55.0, 897.0], [55.1, 897.0], [55.2, 897.0], [55.3, 897.0], [55.4, 897.0], [55.5, 897.0], [55.6, 897.0], [55.7, 897.0], [55.8, 897.0], [55.9, 897.0], [56.0, 898.0], [56.1, 898.0], [56.2, 898.0], [56.3, 898.0], [56.4, 898.0], [56.5, 898.0], [56.6, 898.0], [56.7, 898.0], [56.8, 898.0], [56.9, 898.0], [57.0, 898.0], [57.1, 898.0], [57.2, 898.0], [57.3, 898.0], [57.4, 898.0], [57.5, 898.0], [57.6, 898.0], [57.7, 898.0], [57.8, 898.0], [57.9, 898.0], [58.0, 901.0], [58.1, 901.0], [58.2, 901.0], [58.3, 901.0], [58.4, 901.0], [58.5, 901.0], [58.6, 901.0], [58.7, 901.0], [58.8, 901.0], [58.9, 901.0], [59.0, 901.0], [59.1, 901.0], [59.2, 901.0], [59.3, 901.0], [59.4, 901.0], [59.5, 901.0], [59.6, 901.0], [59.7, 901.0], [59.8, 901.0], [59.9, 901.0], [60.0, 901.0], [60.1, 901.0], [60.2, 901.0], [60.3, 901.0], [60.4, 901.0], [60.5, 901.0], [60.6, 901.0], [60.7, 901.0], [60.8, 901.0], [60.9, 901.0], [61.0, 901.0], [61.1, 901.0], [61.2, 901.0], [61.3, 901.0], [61.4, 901.0], [61.5, 901.0], [61.6, 901.0], [61.7, 901.0], [61.8, 901.0], [61.9, 901.0], [62.0, 904.0], [62.1, 904.0], [62.2, 904.0], [62.3, 904.0], [62.4, 904.0], [62.5, 904.0], [62.6, 904.0], [62.7, 904.0], [62.8, 904.0], [62.9, 904.0], [63.0, 904.0], [63.1, 904.0], [63.2, 904.0], [63.3, 904.0], [63.4, 904.0], [63.5, 904.0], [63.6, 904.0], [63.7, 904.0], [63.8, 904.0], [63.9, 904.0], [64.0, 904.0], [64.1, 904.0], [64.2, 904.0], [64.3, 904.0], [64.4, 904.0], [64.5, 904.0], [64.6, 904.0], [64.7, 904.0], [64.8, 904.0], [64.9, 904.0], [65.0, 905.0], [65.1, 905.0], [65.2, 905.0], [65.3, 905.0], [65.4, 905.0], [65.5, 905.0], [65.6, 905.0], [65.7, 905.0], [65.8, 905.0], [65.9, 905.0], [66.0, 905.0], [66.1, 905.0], [66.2, 905.0], [66.3, 905.0], [66.4, 905.0], [66.5, 905.0], [66.6, 905.0], [66.7, 905.0], [66.8, 905.0], [66.9, 905.0], [67.0, 906.0], [67.1, 906.0], [67.2, 906.0], [67.3, 906.0], [67.4, 906.0], [67.5, 906.0], [67.6, 906.0], [67.7, 906.0], [67.8, 906.0], [67.9, 906.0], [68.0, 907.0], [68.1, 907.0], [68.2, 907.0], [68.3, 907.0], [68.4, 907.0], [68.5, 907.0], [68.6, 907.0], [68.7, 907.0], [68.8, 907.0], [68.9, 907.0], [69.0, 907.0], [69.1, 907.0], [69.2, 907.0], [69.3, 907.0], [69.4, 907.0], [69.5, 907.0], [69.6, 907.0], [69.7, 907.0], [69.8, 907.0], [69.9, 907.0], [70.0, 908.0], [70.1, 908.0], [70.2, 908.0], [70.3, 908.0], [70.4, 908.0], [70.5, 908.0], [70.6, 908.0], [70.7, 908.0], [70.8, 908.0], [70.9, 908.0], [71.0, 910.0], [71.1, 910.0], [71.2, 910.0], [71.3, 910.0], [71.4, 910.0], [71.5, 910.0], [71.6, 910.0], [71.7, 910.0], [71.8, 910.0], [71.9, 910.0], [72.0, 913.0], [72.1, 913.0], [72.2, 913.0], [72.3, 913.0], [72.4, 913.0], [72.5, 913.0], [72.6, 913.0], [72.7, 913.0], [72.8, 913.0], [72.9, 913.0], [73.0, 914.0], [73.1, 914.0], [73.2, 914.0], [73.3, 914.0], [73.4, 914.0], [73.5, 914.0], [73.6, 914.0], [73.7, 914.0], [73.8, 914.0], [73.9, 914.0], [74.0, 927.0], [74.1, 927.0], [74.2, 927.0], [74.3, 927.0], [74.4, 927.0], [74.5, 927.0], [74.6, 927.0], [74.7, 927.0], [74.8, 927.0], [74.9, 927.0], [75.0, 929.0], [75.1, 929.0], [75.2, 929.0], [75.3, 929.0], [75.4, 929.0], [75.5, 929.0], [75.6, 929.0], [75.7, 929.0], [75.8, 929.0], [75.9, 929.0], [76.0, 930.0], [76.1, 930.0], [76.2, 930.0], [76.3, 930.0], [76.4, 930.0], [76.5, 930.0], [76.6, 930.0], [76.7, 930.0], [76.8, 930.0], [76.9, 930.0], [77.0, 934.0], [77.1, 934.0], [77.2, 934.0], [77.3, 934.0], [77.4, 934.0], [77.5, 934.0], [77.6, 934.0], [77.7, 934.0], [77.8, 934.0], [77.9, 934.0], [78.0, 934.0], [78.1, 934.0], [78.2, 934.0], [78.3, 934.0], [78.4, 934.0], [78.5, 934.0], [78.6, 934.0], [78.7, 934.0], [78.8, 934.0], [78.9, 934.0], [79.0, 947.0], [79.1, 947.0], [79.2, 947.0], [79.3, 947.0], [79.4, 947.0], [79.5, 947.0], [79.6, 947.0], [79.7, 947.0], [79.8, 947.0], [79.9, 947.0], [80.0, 960.0], [80.1, 960.0], [80.2, 960.0], [80.3, 960.0], [80.4, 960.0], [80.5, 960.0], [80.6, 960.0], [80.7, 960.0], [80.8, 960.0], [80.9, 960.0], [81.0, 963.0], [81.1, 963.0], [81.2, 963.0], [81.3, 963.0], [81.4, 963.0], [81.5, 963.0], [81.6, 963.0], [81.7, 963.0], [81.8, 963.0], [81.9, 963.0], [82.0, 965.0], [82.1, 965.0], [82.2, 965.0], [82.3, 965.0], [82.4, 965.0], [82.5, 965.0], [82.6, 965.0], [82.7, 965.0], [82.8, 965.0], [82.9, 965.0], [83.0, 991.0], [83.1, 991.0], [83.2, 991.0], [83.3, 991.0], [83.4, 991.0], [83.5, 991.0], [83.6, 991.0], [83.7, 991.0], [83.8, 991.0], [83.9, 991.0], [84.0, 994.0], [84.1, 994.0], [84.2, 994.0], [84.3, 994.0], [84.4, 994.0], [84.5, 994.0], [84.6, 994.0], [84.7, 994.0], [84.8, 994.0], [84.9, 994.0], [85.0, 995.0], [85.1, 995.0], [85.2, 995.0], [85.3, 995.0], [85.4, 995.0], [85.5, 995.0], [85.6, 995.0], [85.7, 995.0], [85.8, 995.0], [85.9, 995.0], [86.0, 1034.0], [86.1, 1034.0], [86.2, 1034.0], [86.3, 1034.0], [86.4, 1034.0], [86.5, 1034.0], [86.6, 1034.0], [86.7, 1034.0], [86.8, 1034.0], [86.9, 1034.0], [87.0, 1197.0], [87.1, 1197.0], [87.2, 1197.0], [87.3, 1197.0], [87.4, 1197.0], [87.5, 1197.0], [87.6, 1197.0], [87.7, 1197.0], [87.8, 1197.0], [87.9, 1197.0], [88.0, 1408.0], [88.1, 1408.0], [88.2, 1408.0], [88.3, 1408.0], [88.4, 1408.0], [88.5, 1408.0], [88.6, 1408.0], [88.7, 1408.0], [88.8, 1408.0], [88.9, 1408.0], [89.0, 1687.0], [89.1, 1687.0], [89.2, 1687.0], [89.3, 1687.0], [89.4, 1687.0], [89.5, 1687.0], [89.6, 1687.0], [89.7, 1687.0], [89.8, 1687.0], [89.9, 1687.0], [90.0, 2545.0], [90.1, 2545.0], [90.2, 2545.0], [90.3, 2545.0], [90.4, 2545.0], [90.5, 2545.0], [90.6, 2545.0], [90.7, 2545.0], [90.8, 2545.0], [90.9, 2545.0], [91.0, 2945.0], [91.1, 2945.0], [91.2, 2945.0], [91.3, 2945.0], [91.4, 2945.0], [91.5, 2945.0], [91.6, 2945.0], [91.7, 2945.0], [91.8, 2945.0], [91.9, 2945.0], [92.0, 3039.0], [92.1, 3039.0], [92.2, 3039.0], [92.3, 3039.0], [92.4, 3039.0], [92.5, 3039.0], [92.6, 3039.0], [92.7, 3039.0], [92.8, 3039.0], [92.9, 3039.0], [93.0, 3345.0], [93.1, 3345.0], [93.2, 3345.0], [93.3, 3345.0], [93.4, 3345.0], [93.5, 3345.0], [93.6, 3345.0], [93.7, 3345.0], [93.8, 3345.0], [93.9, 3345.0], [94.0, 4573.0], [94.1, 4573.0], [94.2, 4573.0], [94.3, 4573.0], [94.4, 4573.0], [94.5, 4573.0], [94.6, 4573.0], [94.7, 4573.0], [94.8, 4573.0], [94.9, 4573.0], [95.0, 5435.0], [95.1, 5435.0], [95.2, 5435.0], [95.3, 5435.0], [95.4, 5435.0], [95.5, 5435.0], [95.6, 5435.0], [95.7, 5435.0], [95.8, 5435.0], [95.9, 5435.0], [96.0, 5837.0], [96.1, 5837.0], [96.2, 5837.0], [96.3, 5837.0], [96.4, 5837.0], [96.5, 5837.0], [96.6, 5837.0], [96.7, 5837.0], [96.8, 5837.0], [96.9, 5837.0], [97.0, 7252.0], [97.1, 7252.0], [97.2, 7252.0], [97.3, 7252.0], [97.4, 7252.0], [97.5, 7252.0], [97.6, 7252.0], [97.7, 7252.0], [97.8, 7252.0], [97.9, 7252.0], [98.0, 8449.0], [98.1, 8449.0], [98.2, 8449.0], [98.3, 8449.0], [98.4, 8449.0], [98.5, 8449.0], [98.6, 8449.0], [98.7, 8449.0], [98.8, 8449.0], [98.9, 8449.0], [99.0, 9354.0], [99.1, 9354.0], [99.2, 9354.0], [99.3, 9354.0], [99.4, 9354.0], [99.5, 9354.0], [99.6, 9354.0], [99.7, 9354.0], [99.8, 9354.0], [99.9, 9354.0]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 54.0, "series": [{"data": [[8400.0, 1.0], [9300.0, 1.0], [2500.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3300.0, 1.0], [800.0, 54.0], [900.0, 28.0], [1000.0, 1.0], [4500.0, 1.0], [1100.0, 1.0], [5400.0, 1.0], [1400.0, 1.0], [5800.0, 1.0], [1600.0, 1.0], [100.0, 4.0], [7200.0, 1.0]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 85.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 85.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.62181158E12, "maxY": 2.04, "series": [{"data": [[1.62181164E12, 1.0], [1.62181158E12, 2.04]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62181164E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 860.2873563218392, "minX": 1.0, "maxY": 9354.0, "series": [{"data": [[8.0, 5775.0], [4.0, 4573.0], [2.0, 1430.6666666666667], [1.0, 860.2873563218392], [5.0, 5435.0], [6.0, 9354.0], [3.0, 2745.0], [7.0, 5298.5]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved", "isController": false}, {"data": [[1.5200000000000005, 1319.1100000000004]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2129.1666666666665, "minX": 1.62181158E12, "maxY": 107593.55, "series": [{"data": [[1.62181164E12, 99008.86666666667], [1.62181158E12, 107593.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62181164E12, 2129.1666666666665], [1.62181158E12, 2129.1666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62181164E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 833.4599999999998, "minX": 1.62181158E12, "maxY": 1804.7600000000007, "series": [{"data": [[1.62181164E12, 833.4599999999998], [1.62181158E12, 1804.7600000000007]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62181164E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 774.6999999999999, "minX": 1.62181158E12, "maxY": 1741.2399999999998, "series": [{"data": [[1.62181164E12, 774.6999999999999], [1.62181158E12, 1741.2399999999998]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62181164E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 78.47999999999999, "minX": 1.62181158E12, "maxY": 303.42, "series": [{"data": [[1.62181164E12, 78.47999999999999], [1.62181158E12, 303.42]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62181164E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 808.0, "minX": 1.62181158E12, "maxY": 9354.0, "series": [{"data": [[1.62181164E12, 991.0], [1.62181158E12, 9354.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62181164E12, 919.3000000000001], [1.62181158E12, 5348.799999999999]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62181164E12, 991.0], [1.62181158E12, 9354.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62181164E12, 961.95], [1.62181158E12, 7790.649999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62181164E12, 869.0], [1.62181158E12, 808.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62181164E12, 886.5], [1.62181158E12, 906.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62181164E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 132.5, "minX": 1.0, "maxY": 4573.0, "series": [{"data": [[1.0, 890.0], [2.0, 1547.5], [5.0, 4573.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 132.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 132.5, "minX": 1.0, "maxY": 4487.0, "series": [{"data": [[1.0, 826.0], [2.0, 1475.5], [5.0, 4487.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 132.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.62181158E12, "maxY": 0.85, "series": [{"data": [[1.62181164E12, 0.8166666666666667], [1.62181158E12, 0.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62181164E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.62181158E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.62181164E12, 0.7666666666666667], [1.62181158E12, 0.8333333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.62181164E12, 0.06666666666666667]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62181164E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.62181158E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.62181164E12, 0.7666666666666667], [1.62181158E12, 0.8333333333333334]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved-success", "isController": false}, {"data": [[1.62181164E12, 0.06666666666666667]], "isOverall": false, "label": "api/rdt/applicants?page=1&per_page=50&sort_by=registration_at&sort_order=desc&status=approved-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62181164E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.62181158E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.62181164E12, 0.7666666666666667], [1.62181158E12, 0.8333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62181164E12, 0.06666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62181164E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

