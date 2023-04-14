async function FetchSensorDevice(deviceId, authToken) {
    const url = "https://also.allthingstalk.io/device/"+deviceId;
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("Authorization", "Bearer " + authToken)
    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    let response = await fetch(url, requestOptions);

    if (response.ok) {
        let json = await response.json()
        console.log(json);
    } else {
        console.log("Error: " + response.status);
    }
}



async function FetchSensorData(assetId, authToken, sensor) {
    const url = "https://also.allthingstalk.io/asset/"+assetId;
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("Authorization", "Bearer " + authToken)
    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    let response = await fetch(url, requestOptions);

    if (response.ok) {
        let json = await response.json();
        ParseSensor1Data(json, sensor);
    } else {
        console.log("Error: " + response.status);
    }
}

function ParseSensor1Data(json, sensor) {
    let value = Math.round(json.state.value);

    sensor_elem = document.getElementById(sensor);
    sensor_elem.innerText = value + " °";
}

const sensor1_assetId = "xpGRQB7Tf1OJWqqCiNdWmRoY"
const sensor1_authToken = "also:4Il7bTWaMr1ETKeaxf7MTQKODHWQyID81IauqRvQ"
FetchSensorData(sensor1_assetId, sensor1_authToken, "sensor-1");


const sensor2_assetId = "6lyBwhezf2seodnxuJ6NJO1b"
const sensor2_authToken = "also:4LgrrSuqNLUD0YSTCavFivOBz5UYd32t1UHJCxZ5"
FetchSensorData(sensor2_assetId, sensor2_authToken, "sensor-2");

const sensor3_assetId = "pwbh4ozktzqHRhHk14C8yoY3"
const sensor3_authToken = "also:4uFVHM3QLljkoalUJTmKR3KMvrkbrTeg6Cc8pTOg"
FetchSensorData(sensor3_assetId, sensor3_authToken, "sensor-3");