<script lang="ts">
	import { enhance } from '$app/forms';
    import { flip } from 'svelte/animate';
	export let data;
</script>

<h1>My Blog</h1>
<form method="POST" action="?/create" use:enhance style="margin: 10px; padding: 10px; border: 1px solid black">
	<h2>Create Post</h2>
    <div>
		<label for="title">Title</label>
		<input type="text" name="title" id="title" />
	</div>
	<div>
		<label for="body">Body</label>
		<textarea name="body" id="body"></textarea>
	</div>
	<br />
	<button type="submit">Publish</button>
</form>
<ul style="list-style: none; padding: 0;">
	{#each data.posts as post (post.id)}
		<li style="border: 1px solid blacK; margin: 10px; padding: 10px; background: #fff;" animate:flip>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<form method="POST" action="?/update" style="padding: 10px; margin: 10px; border: 1px solid black;" use:enhance>
				<h3>Update Post</h3>
                <div>
					<label for="title">Title</label>
					<input type="text" name="title" id="title" value={post.title} />
				</div>
				<div>
					<label for="body">Body</label>
					<textarea name="body" id="body" value={post.body}></textarea>
				</div>
				<br />
				<button name="post_id" value={post.id} type="submit">Update</button>
			</form>
			<br />
			<br />
			<form method="POST" action="?/delete" use:enhance>
				<button name="post_id" value={post.id} type="submit">Delete</button>
			</form>
		</li>
	{/each}
</ul>
