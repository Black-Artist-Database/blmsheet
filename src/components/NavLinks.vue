<template>
	<div class="links-container">
	<!-- DATABASES -->
		<div class="nav-link">
			<span><i/>DATABASE</span>
			<div class="custom-dropdown database-dropdown">
				<router-link to="/" class="" @click.native="$emit('dismissMobileMenu')"><span>-ARTIST DATABASE</span></router-link>
				<router-link to="/creative" class="creative-link" @click.native="$emit('dismissMobileMenu')"><span>-CREATIVE DATABASE</span></router-link>
			</div>
		</div>
		<!-- EXPLORE -->
		<div class="nav-link">
			<span><i/>EXPLORE</span>
			<div class="custom-dropdown">
				<a href="https://content.blackartistdatabase.co/categories/read/" @click="$emit('dismissMobileMenu')"><span>-READ</span></a>
				<a href="https://content.blackartistdatabase.co/categories/listen/" @click="$emit('dismissMobileMenu')"><span>-LISTEN</span></a>
				<router-link to="/about" class="" @click.native="$emit('dismissMobileMenu')"><span>-ABOUT</span></router-link>
			</div>
		</div>
		<!-- SUPPORT -->
		<div class="nav-link">
			<span><i/>SUPPORT</span>
			<div class="custom-dropdown">
				<a href="https://www.patreon.com/blackartistdatabase/" target="_blank" @click="$emit('dismissMobileMenu')"><span>-PATREON</span></a>
			</div>
		</div>
		<!-- EVENTS -->
		<div class="nav-link">
			<span><i/>EVENTS</span>
			<div class="custom-dropdown">
				<router-link to="/events" class="" @click.native="$emit('dismissMobileMenu')"><span>-BAD EVENTS</span></router-link>
			</div>
		</div>
		<!-- LABEL -->
		<div class="nav-link">
			<span><i/>LABEL</span>
			<div class="custom-dropdown">
				<router-link to="/label" class="" @click.native="$emit('dismissMobileMenu')"><span>-BAD LABEL</span></router-link>
			</div>
		</div>
		<div class="nav-link store">
      <a href="https://store.blackartistdatabase.co/" target="_blank" @click="$emit('dismissMobileMenu')"><span><i/>STORE</span></a>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'NavLinks'
	}
</script>


<style lang="scss" scoped>

.links-container {
	position: relative;
	width: 100%;
}


.nav-link {
	font-weight:400;
	cursor: pointer;
	position: relative;
	padding: 0;
	margin: 0 10px;
	span {
		display: block;
		height: 100%;
		line-height: 30px;
		min-width: 120px;
		text-align: left;
		i {
			background: black;
			width:8px;
			height:8px;
			border-radius: 50px;
			display: inline-block;
			margin-right:5px;
		}
	}
	.green {
		display: inline;
		color: #336666;
	}

	&:hover .custom-dropdown {
		display: flex;
	}
	.custom-dropdown {
		display: none;
		flex-direction: column;
		position: absolute;
		left: -1px;
		top: 30px;
		z-index: 4;
		background-color: #f7f7f7;
		min-width: 220px;
		text-align: left;
		border: 1px solid black;
		border-top: 0;
		padding: 5px 0 5px 15px;
		&.database-dropdown {
			left: -11px;
			min-width: 210px;
		}
	}
	a {
		text-decoration: none;
		color: black;
		height: 25px;
		&:hover {
			text-decoration: underline;
		}
	}
}

.store {
	position: absolute;
	right: 0;
	top: 0;
	border-left: 1px solid black;
	span {
		text-align: right;
		padding: 0 15px;
		box-sizing: border-box;
		min-width: 0px;
	}
}

@media screen and (max-width: 800px) {
	.nav-link {
		padding-left: 60px;
		margin: 0;
	}
	.custom-dropdown {
		display: flex !important;
		position: relative !important;
		border: none !important;
		background: none !important;
		top: -5px !important;
	}

	.store {
		position: absolute;
		top: unset;
		right: unset;
		bottom: 0;
		left: 0;
		border-left: none;
		border-top: 1px solid black;
		width: 100%;
		span {
			text-align: left;
			padding: 0;
		}
	}
}

</style>
