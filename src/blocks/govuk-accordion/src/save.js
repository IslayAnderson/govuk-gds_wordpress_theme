/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	

	return `
	<div class="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
		<div class="govuk-accordion__section">
			<div class="govuk-accordion__section-header">
			<h2 class="govuk-accordion__section-heading">
				<span class="govuk-accordion__section-button" id="accordion-default-heading-1">
				Writing well for the web
				</span>
			</h2>
			</div>
			<div id="accordion-default-content-1" class="govuk-accordion__section-content">
			<p class="govuk-body">This is the content for Writing well for the web.</p>
			</div>
		</div>
		<div class="govuk-accordion__section">
			<div class="govuk-accordion__section-header">
			<h2 class="govuk-accordion__section-heading">
				<span class="govuk-accordion__section-button" id="accordion-default-heading-2">
				Writing well for specialists
				</span>
			</h2>
			</div>
			<div id="accordion-default-content-2" class="govuk-accordion__section-content">
			<p class="govuk-body">This is the content for Writing well for specialists.</p>
			</div>
		</div>
		<div class="govuk-accordion__section">
			<div class="govuk-accordion__section-header">
			<h2 class="govuk-accordion__section-heading">
				<span class="govuk-accordion__section-button" id="accordion-default-heading-3">
				Know your audience
				</span>
			</h2>
			</div>
			<div id="accordion-default-content-3" class="govuk-accordion__section-content">
			<p class="govuk-body">This is the content for Know your audience.</p>
			</div>
		</div>
		<div class="govuk-accordion__section">
			<div class="govuk-accordion__section-header">
			<h2 class="govuk-accordion__section-heading">
				<span class="govuk-accordion__section-button" id="accordion-default-heading-4">
				How people read
				</span>
			</h2>
			</div>
			<div id="accordion-default-content-4" class="govuk-accordion__section-content">
			<p class="govuk-body">This is the content for How people read.</p>
			</div>
		</div>
		</div>
	`;
}
