(function(){
    alert("Welcome" + StudentName)
    var StudentName ="Ted";
    var arr = [13,36,24,4,25,26]
    var min =arr[0];
    var max = arr[0];
    for(var j=0; j<arr.length;j++)
    {
      if(arr[j]>max)
        max=arr[j];
      if(arr[j]<min)
        min=arr[j]

    }
    alert("Min:"+ min );
    alert("Max:"+ max );
})()
</script>
</head>
