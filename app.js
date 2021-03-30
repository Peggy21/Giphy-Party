console.log("Let's get this party started!");

const gif = $("#gif");
const searchInput = $("#search");

function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
      let randomImg = Math.floor(Math.random() * numResults);
      let newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
      let newGif = $("<img>", {
        src: res.data[randomImg].images.original.url,
        class: "w-100"
      });
      newCol.append(newGif);
      gif.append(newCol);
    }
  }

  $("form").on("submit", async function(e) {
    e.preventDefault();
  
    let searchTerm = searchInput.val();
    searchInput.val("");

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGif(res.data);
});

$("#remove").on("click", function() {
    gif.empty();
  });