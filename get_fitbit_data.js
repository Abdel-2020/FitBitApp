const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhLMlgiLCJzdWIiOiJCNDVOS0IiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3bnV0IHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd2xvYyB3cmVzIiwiZXhwIjoxNjYxODYyNzM4LCJpYXQiOjE2NTkyNzA3Mzh9.OxObARJZSeNbQzdn9MNJnDRZ2jjK43QyPColYQIL-QI";



fetch('https://api.fitbit.com/1/user/-/activities/heart/date/today/7d.json'  	,  {
    method: "GET",
    headers:{"Authorization": "Bearer " + access_token }
})

.then (response => response.json())
.then(json => console.log(json));