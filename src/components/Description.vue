<template>
  <div class="styled-description" :class="{compact: compact}" v-html="markup(description)" />
</template>

<script>
import * as commonmark from 'commonmark';

export default {
	name: 'Description',
	props: {
		description: {
			type: String,
			default: ''
		},
		compact: {
			type: Boolean,
			default: false
		},
		allowHTML: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		markup(text) {
			if (typeof text !== 'string') {
				return '';
			}

			// Parse CommonMark
			var reader = new commonmark.Parser();
			var writer = new commonmark.HtmlRenderer({safe: !this.allowHTML, smart: true});
			var parsed = reader.parse(text);
			return writer.render(parsed);
		}
	}
};
</script>

<style lang="scss">
@import '../theme/variables.scss';

#stac-browser .metadata {
	.styled-description,
	.value > .description {
		line-height: 1.4em;

		h1, h2, h3, h4, h5, h6 {
			color: map-get($theme-colors, "secondary");
			font-weight: 600;
		}
		h1 {
			font-size: 1.5em;
		}
		h2 {
			font-size: 1.4em;
		}
		h3 {
			font-size: 1.3em;
		}
		h4 {
			font-size: 1.2em;
		}
		h5 {
			font-size: 1.1em;
		}
		h6 {
			font-size: 1.0em;
		}
		pre {
			background-color: #eee;
			width: 100%;
			border: 1px solid #ccc;
			max-height: 15em;
			overflow-y: auto;
		}
		pre code {
			background-color: transparent; 
			display: block;
			margin: 0.5em;
		}
		code {
			color: maroon;
			display: inline-block;
			padding: 0 0.1em;
		}

		&.compact {
			h1, h2, h3, h4, h5, h6 {
				font-weight: bold;
				font-size: 1.1em;
				margin: 0.5em 0;
			}
			p {
				margin: 0.5em 0;
			}
			p:first-child {
				margin-top: 0;
			}
			p:last-child {
				margin-bottom: 0;
			}
			pre {
				max-height: 7em;
				width: auto;
				max-width: 100%;
			}
		}
	}
}
</style>