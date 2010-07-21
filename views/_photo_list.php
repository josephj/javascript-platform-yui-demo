<!-- #photo-list  (start) -->
<div id="photo-list" class="mod-side mod-img-list">
    <div class="hd">
        <div class="title">
            <h3>Flickr Photo List</h3>
        </div>
    </div>
    <div class="bd loading">
        <ul>
<?php foreach ($data["photos"] as $photo) : ?>
            <li>
                <a href="<?php echo $photo["link"]; ?>" title="<?php echo $photo["title"]; ?>" target="_blank">
                    <img src="<?php echo $photo["src"];?>" alt="<?php echo $photo["title"]; ?>"> 
                </a>
            </li>
<?php endforeach; ?>
        </ul>
    </div>
</div>
<!-- #photo-list (end) -->
