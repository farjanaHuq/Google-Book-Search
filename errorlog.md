Error log - Google-Book-Search

1. Error Name: MongoError

Issue was resolved by changing the port from

Const PORT = process.env.PORT || 3000; to Const PORT = process.env.PORT || 8080; 

2.  Cannot read property this.setState({}) of undefined

This.setState() function was trying to set value to books array fetching the response from axios.

This.setState({
        books : resp.data
   })

The axios request was inside the onSubmit(e) function

onSubmit(e) {
  …..
   ….
  ….
axios.get(‘api/books’)
.then(resp => {
   Console.log(resp.data)
    this.setState({
        Books : resp.data
 })
}

Solved by  doing: 
onSubmit = (e) => {
  …..
  ….
  ….
axios.get(‘api/books’)
.then(resp => {
   Console.log(resp.data)
    this.setState({
        Books : resp.data
 })
}


3. Cannot read property 'map' of undefined