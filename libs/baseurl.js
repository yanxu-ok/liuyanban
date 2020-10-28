let URL
	if (process.env.NODE_ENV === "development") {
	  URL = ''
	}else {
	   URL = 'https://app.iqilu.com'
	}
export default{
	URL
}