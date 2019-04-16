

// Guardar en el cache dinamico
function actualizaCacheDinamico(dynamnicCache, req, res){
    if (res.ok){
        return caches.open(dynamnicCache).then( cache => {
            cache.put(req, res.clone() );
            return res.clone();
        })
    } else {
        return res;
    }
}