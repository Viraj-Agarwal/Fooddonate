from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def home(request):
    return render(request, 'index.html')

def givefood(request):
    return render(request, 'maps.html')


def open_blog(request):
    return render(request, "blog.html")


def cases(request):
    return render(request, "Cases.html")\


'''function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

         let lat = position.coords.latitude;
         let long = position.coords.longitude;
         $("input[name='lat']").val(lat);
         $("input[name='lat']").val(long);
         let url_str = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+long+'&key=yourkey'
        $.getJSON(url_str, function(data) {
              console.log(data);
              //here you get the location data, like street address, city and pass it to inputs and submit the https://meet.google.com/ewy-dsje-eaxform to save it.
          });
        }'''
