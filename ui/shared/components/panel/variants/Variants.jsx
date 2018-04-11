import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'

import VariantFamily from './VariantFamily'

const Variants = ({ variants }) =>
  <Grid divided="vertically">
    {variants.map(variant =>
      <Grid.Row key={variant.variantId} style={{ padding: 0, color: '#999', fontSize: '12px' }}>
        <Grid.Column width={16}><VariantFamily variant={variant} /></Grid.Column>
      </Grid.Row>,
    )}
  </Grid>

Variants.propTypes = {
  variants: PropTypes.array,
}

export default Variants

// <div class="basicvariant">
//         <div class="highlight-msg">
//             <% console.log(variant); %>
//             <% if(variant.extras && variant.extras.clinvar_variant_id) { %>
//                 <div>
//                     This variant is <a target="_blank" href="http://www.ncbi.nlm.nih.gov/clinvar/variation/<%= variant.extras.clinvar_variant_id %>">in ClinVar</a> as
//                     <i style="font-weight:500">
//                         <% _.each(variant.extras.clinvar_clinsig.split(";"),
//                             function(clinsig) {
//                                 var color = utils.getClinvarClinsigColor(clinsig);
//                             %>
//                                 <i style="color:<%= color %>"><%= clinsig %></i>
//                             <% });
//                         %>
//                     </i>
//                 </div>
//             <% } %>
//             <% if (variant.extras && variant.extras.family_tags && variant.extras.family_tags.length > 0) { %>
//                 <div class="tags">
//                     <div class="greytext" style="vertical-align:top; margin-right:50px"><b>Tags: </b></div><span style="display:inline-block">
//                     <% _.each(variant.extras.family_tags, function(tag) { %>
//                         <% if(show_tag_details) { %>
//                             <span class="label" style="background-color:<%= tag.color %>; margin-left:10px;"><%= tag.tag %></span>
//                             <i>
//                                 tagged by
//                                 <% if(tag.user) { %>
//                                     <%= tag.user.display_name %>
//                                 <% } else { %>
//                                     unknown user
//                                 <% } %>
//                                 <% if(tag.date_saved) { %> (<%= tag.date_saved %>) <% } %>
//                             </i>
//                             <% if(tag.search_url) { %>
//                                 <a style="margin-left:10px" href="<%= tag.search_url %>">
//                                     <i class="fa fa-search" aria-hidden="true"></i>
//                                 </a>
//                                 <a href="<%= tag.search_url %>">re-run variant search</a>
//                 <% } %>
//                 <br />
//                  <% } else { %>
//                         <span class="label" style="background-color:<%= tag.color %>;"><%= tag.tag %></span>
//                     <% } %>
//               <% }); %>
//               </span>
//                 </div>
//             <% } %>
//             <% if (allow_functional && variant.extras.family_functional_data.length > 0) { %>
//                 <div class="tags functional-data">
//                     <div class="greytext" style="vertical-align:top; margin-right:50px"><b>Fxnl: </b></div><span style="display:inline-block">
//                     <% _.each(variant.extras.family_functional_data, function(tag) { %>
//                         <% if(show_tag_details) { %>
//                             <span class="label" style="background-color:<%= tag.tag_config.color %>; margin-left:10px;"><%= tag.tag %></span>
//                             <% if(tag.metadata) { %>
//                                 <b>&nbsp<%= tag.tag_config.metadata_title %>: <%= tag.metadata %>&nbsp</b>
//                             <% } %>
//                             <i>
//                                 tagged by
//                                 <% if(tag.user) { %>
//                                     <%= tag.user.display_name %>
//                                 <% } else { %>
//                                     unknown user
//                                 <% } %>
//                                 <% if(tag.date_saved) { %> (<%= tag.date_saved %>) <% } %>
//                             </i>
//                             <% if(tag.search_url) { %>
//                                 <a style="margin-left:10px" href="<%= tag.search_url %>">
//                                     <i class="fa fa-search" aria-hidden="true"></i>
//                                 </a>
//                                 <a href="<%= tag.search_url %>">re-run variant search</a>
//                 <% } %>
//                 <br />
//                       <% } else { %>
//                           <span class="label" style="background-color:<%= tag.tag_config.color %>;"><%= tag.tag %></span>
//                       <% } %>
//               <% }); %>
//               </span>
//                 </div>
//             <% } %>
//             <%  if (variant.extras && variant.extras.family_notes && variant.extras.family_notes.length > 0) { %>
//                 <div class="notes">
//                     <div class="greytext"><b>Notes: </b></div>
//                     <span style="display:inline-block">
//                         <% for(var i = variant.extras.family_notes.length - 1; i >= 0; i--) {
//                             var family_note = variant.extras.family_notes[i];
//                             %>
//                             <%= family_note.note %>
//                             <i>by
//                                 <% if(family_note.user) { %>
//                                     <%= family_note.user.display_name %>
//                                 <% } else { %>
//                                     unknown user
//                                 <% } %>
//                                 <% if(family_note.submit_to_clinvar) { %>
//                                     <span style="color:red"> for clinvar </span>
//                                 <% } %>
//                                 <% if(family_note.date_saved) { %>
//                                     (<%= family_note.date_saved %>)
//                                 <% } %>
//                             </i>
//                             <a class="edit-variant-note" data-target="<%= family_note.note_id %>"><i class="fa fa-pencil" aria-hidden="true"></i></a>
//                             <a class="delete-variant-note" data-target="<%= family_note.note_id %>"><i class="fa fa-trash-o"  aria-hidden="true"></i></a>
//                             <br />
//                         <% } %>
//                     </span>
//                 </div>
//
//             <% } %>
//         </div>
//
//         <% if (leftview) { %>
//             <div class="leftview"></div>
//         <% } %>
//
//         <div class="cell icons" style="display:none;">
//             <% if (variant.extras.disease_genes && variant.extras.disease_genes.length > 0 ) { %>
//                 <i class="fa fa-warning icon-popover"
//                     title="Gene List"
//                     data-content="<% _.each(variant.extras.disease_genes, function (a) { %><%= a %><% }); %>"></i>
//             <% } %>
//             <% if (variant.extras.in_disease_gene_db) { %>
//                 <i class="fa fa-plus icon-popover"
//                     title="Present in Disease Database"
//                     data-content="This variant is in a gene that has been linked to a disease phenotype.
//                     Click the gene for more info. "></i>
//             <% } %>
//             <% if (variant.extras.family_notes && variant.extras.family_notes.length > 0 ) { %>
//                 <i class="fa fa-bookmark search-flag-icon"
//                    data-xpos="<%= variant.xpos %>"
//                    data-ref="<%= variant.ref %>"
//                    data-alt="<%= variant.alt %>"></i>
//             <% } %>
//         </div>
//
//         <% if (show_gene) {  %>
//             <div class="cell genes">
//                 <% _.each(variant.extras.genes, function(gene, gene_id) { %>
//                     <div class="gene-cell">
//                         <a class="gene-link" data-gene_id="<%= gene_id %>"><%= gene.symbol || variant.extras.gene_names[gene_id] %></a><br/>
//                         <sub>
//                             <a href="http://www.gtexportal.org/home/gene/<%= gene.symbol %>" target="_blank">GTEx</a><br />
//                             <a href="http://gnomad-beta.broadinstitute.org/gene/<%= gene.symbol %>" target="_blank">gnomAD</a><br />
//                             <% if(show_gene_search_link && project_id) { %>
//                                 <a href="/project/<%= project_id %>/gene/<%= gene_id %>" target="_blank">Gene Search</a><br/>
//                             <% } %>
//                         </sub>
//                         <div class="highlights">
//                             <% if (gene.missense_constraint && gene.missense_constraint_rank[0] < 1000) { %>
//                                 <span class="label label-default" style='display:inline'>MISSENSE CONSTR
//                                     <i class="icon-question-sign icon-popover"
//                                        title="Missense Constraint"
//                                        data-placement="right"
//                                        data-content="This gene ranks <%= gene.missense_constraint_rank[0] %> most constrained out of <%= gene.missense_constraint_rank[1] %> genes under study in terms of missense constraint (z-score: <%= gene.missense_constraint.toPrecision(4) %>). Missense contraint is a measure of the degree to which the number of missense variants found in this gene in ExAC v0.3 is higher or lower than expected according to the statistical model described in [K. Samocha 2014]. In general this metric is most useful for genes that act via a dominant mechanism, and where a large proportion of the protein is heavily functionally constrained.">
//                                     </i>
//                                 </span>
//                                 <br />
//                             <% } %>
//                             <% if (gene.lof_constraint && gene.lof_constraint_rank[0] < 1000) { %>
//                                 <span class="label label-default">
//                                     LOF CONSTR
//                                     <i class="icon-question-sign icon-popover"
//                                        title="Loss of Function Constraint"
//                                        data-placement="right"
//                                        data-content="This gene ranks as <%= gene.lof_constraint_rank[0] %> most intolerant of LoF mutations out of <%= gene.lof_constraint_rank[1] %> genes under study. This metric is based on the amount of expected variation observed in the ExAC data and is a measure of how likely the gene is to be intolerant of loss-of-function mutations."></i>
//                                 </span><br/>
//                             <% } %>
//                         </div>
//                     </div>
//                 <% }); %>
//                 <% if (variant.extras.in_disease_gene_db) { %>
//                 <span class="label label-default">IN OMIM</span><br/>
//                 <% } %>
//                 <% if (variant.extras.disease_genes && variant.extras.disease_genes.length > 0 ) { %>
//                     <% _.each(variant.extras.disease_genes, function (gene_list_name) { %>
//                         <span class="label label-danger icon-popover"
//                               title="Gene List"
//                               data-content="<%= gene_list_name %>">
//                             GENE LIST: <%= gene_list_name.substring(0,6) %> <%= gene_list_name.length > 6 ? '..' : '' %>
//                         </span><br/>
//                     <% }); %>
//                 <% } %>
//             </div>
//         <% } %>
//         <div class="cell location">
//             <a class="external-link" href="<%= utils.getVariantUCSCBrowserLink(variant, variant.extras.genome_version) %>" target="_blank">
//                 <%= 'chr'+variant.chr %>:<%= variant.pos %>
//             </a><br/>
//             <span class="allele-display" title="<%= variant.ref %>"><%= variant.ref %></span>
//             <i class="fa fa-angle-right"></i>
//             <span class="allele-display" title="<%= variant.alt %>"><%= variant.alt %></span><br/>
//             <% if (variant.annotation && variant.annotation.rsid) { %>
//                 <a class="external-link" target="_blank" href="http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?searchType=adhoc_search&type=rs&rs=<%= variant.annotation.rsid %>">
//                     <%= variant.annotation.rsid %>
//                 </a>
//         <% } %><br />
//         <% if (variant.extras && variant.extras.genome_version == "38" && variant.extras.grch37_coords) { %><br />
//               <a class="external-link" href="<%= utils.getVariantUCSCBrowserLink(variant, '37') %>" target="_blank" >
//                   <small>hg19: <%= variant.extras.grch37_coords.split("-").slice(0, 2).join(":") %></small>
//               </a><br/>
//         <% } else if (variant.extras.genome_version == "38") { %>
//                 <small>hg19: liftover failed</small>
//             <% } %>
//             <div style="margin-top:10px;">
//                 <% if(family_read_data_is_available) { %>
//                     <sup><a class="view-reads"><img src="{% static 'images/igv_reads_12x12.png' %}"/> &nbsp; SHOW READS</a></sup>
//                 <% } %>
//             </div>
//         </div>
//         <div class="cell annotations">
//             <a class="annotation-link"
//                 data-xpos="<%= variant.xpos %>"
//                 data-ref="<%= variant.ref %>"
//                 data-alt="<%= variant.alt %>">
//                 <% if (variant.annotation) { %>
//                        <%= variant.annotation.vep_group.replace(/_/g, ' ') %>
//                 <% } %>
//             </a>
//             <% if(variant.annotation && variant.annotation.vep_annotation) { %>
//                 <% var worst_vep_annotation = variant.annotation.vep_annotation[variant.annotation.worst_vep_annotation_index];
//                 if (worst_vep_annotation.lof == 'LC' || worst_vep_annotation.lof_flags == 'NAGNAG_SITE') {
//                     var loftee_tooltip = '';
//                     if (worst_vep_annotation.lof_filter != '') {
//                         var lof_filters = _.uniq(worst_vep_annotation.lof_filter.split("&")).map(
//                             function(lof_filter) {
//                                 if(lof_filter == 'END_TRUNC') return 'LOFTEE: End Truncation<br>This variant falls in the last 5% of the transcript.';
//                                 else if(lof_filter == 'INCOMPLETE_CDS') return 'LOFTEE: Incomplete CDS<br>The start or stop codons are not known for this transcript.';
//                                 //else if(lof_filter == 'NON_CAN_SPLICE_SURR') return 'LOFTEE: Non Canonical Splicing<br>This exon has surrounding splice sites that are non-canonical (not GT..AG).';
//                                 else if(lof_filter == 'EXON_INTRON_UNDEF') return 'LOFTEE: Exon-Intron Boundaries<br>The exon/intron boundaries of this transcript are undefined in the EnsEMBL API.';
//                                 else if(lof_filter == 'SMALL_INTRON') return 'LOFTEE: Small Intron<br>The LoF falls in a transcript whose exon/intron boundaries are undefined in the EnsEMBL API.';
//                                 else if(lof_filter == 'NON_CAN_SPLICE') return 'LOFTEE: Non Canonical Splicing<br>This variant falls in a non-canonical splice site (not GT..AG).';
//                                 else if(lof_filter == 'ANC_ALLELE') return 'LOFTEE: Ancestral Allele<br>The alternate allele reverts the sequence back to the ancestral state.';
//                                  //else return "LOFTEE: " + lof_filter;
//                             });
//                         loftee_tooltip += lof_filters.join("<br>");
//                     }
//
//                     if(worst_vep_annotation.lof_flags == 'NAGNAG_SITE') {
//                         loftee_tooltip += "LOFTEE: NAGNAG site<br>This acceptor site is rescued by another adjacent in-frame acceptor site.";
//                     }
//
//                     if (loftee_tooltip.length > 0) { %>
//                         <span class="loftee label label-danger gotooltip" style="margin-left:10px; vertical-align:top; font-size:10px; color:white; display:inline" data-placement="top" data-original-title="<%= loftee_tooltip %>">
//                             LC LoF
//                         </span><br />
//                     <%
//                     }
//                 } %>
//
//                 <br/>
//
//                 <% if (worst_vep_annotation.hgvsc) { %>
//                    <span>HGVS.C</span> <%= unescape(worst_vep_annotation.hgvsc.split(':').pop()) %></span><br />
//                 <% } %>
//                 <% if (worst_vep_annotation.hgvsp) { %>
//                    <span>HGVS.P</span> <%= unescape(worst_vep_annotation.hgvsp.split(':').pop()) %></span><br />
//                 <% } %>
//
//                 <% var variantSearchLinks = utils.getVariantSearchLinks(variant); %>
//                 <sup><a target="_blank" href="<%= variantSearchLinks['google'] %>">google</a> | <a target="_blank" href="<%= variantSearchLinks['pubmed'] %>">pubmed</a></sup>
//             <% } %>
//         </div>
//
//         <div class="cell predictions">
//             <% if (variant.annotation) { %>
//                 <% if (variant.annotation.polyphen) { %>
//                     <% if (variant.annotation.polyphen == 'probably_damaging') { %><i class="fa fa-circle redcircle"></i><% } %>
//                     <% if (variant.annotation.polyphen == 'possibly_damaging') { %><i class="fa fa-circle yellowcircle"></i><% } %>
//                     <% if (variant.annotation.polyphen == 'benign') { %><i class="fa fa-circle greencircle"></i><% } %>
//                     <span>Polyphen</span> <%= variant.annotation.polyphen.replace("_", " ") %> <br/>
//                 <% } %>
//                 <% if (variant.annotation.sift) { %>
//                     <% if (variant.annotation.sift == 'damaging') { %><i class="fa fa-circle redcircle"></i><% } %>
//                     <% if (variant.annotation.sift == 'tolerated') { %><i class="fa fa-circle greencircle"></i><% } %>
//                     <span>SIFT</span> <%= variant.annotation.sift %> <br/>
//                 <% } %>
//                 <% if (variant.annotation.muttaster) { %>
//                     <% if (variant.annotation.muttaster == 'disease_causing') { %><i class="fa fa-circle redcircle"></i><% } %>
//                     <% if (variant.annotation.muttaster == 'polymorphism') { %><i class="fa fa-circle greencircle"></i><% } %>
//                     <span>Mut Taster</span> <%= variant.annotation.muttaster.replace("_", " ") %> <br/>
//                 <% } %>
//                 <% if (variant.annotation.fathmm) { %>
//                     <% if (variant.annotation.fathmm == 'damaging') { %><i class="fa fa-circle redcircle"></i><% } %>
//                     <% if (variant.annotation.fathmm == 'tolerated') { %><i class="fa fa-circle greencircle"></i><% } %>
//                     <span>FATHMM</span> <%= variant.annotation.fathmm %> <br/>
//                 <% } %>
//                 <% if (variant.annotation.cadd_phred) {
//                     var phred = parseFloat(variant.annotation.cadd_phred)
//                     if( phred >= 20 ) { %>
//                         <i class="fa fa-circle redcircle"></i>
//                     <% } else if( phred >= 10 ) { %>
//                         <i class="fa fa-circle yellowcircle"></i>
//                     <% } else { %>
//                         <i class="fa fa-circle greencircle"></i>
//                     <% } %>
//                     <span>CADD PHRED</span> <%= variant.annotation.cadd_phred %> <br/>
//                 <% } %>
//                 <% if (variant.annotation.dann_score) {
//                     var dann_score = parseFloat(variant.annotation.dann_score)
//                     if( dann_score >= 0.96 ) { %>
//                         <i class="fa fa-circle redcircle"></i>
//                     <% } else if( dann_score >= 0.93 ) { %>
//                         <i class="fa fa-circle yellowcircle"></i>
//                     <% } else { %>
//                         <i class="fa fa-circle greencircle"></i>
//                     <% } %>
//                     <span>DANN SCORE</span> <%= parseFloat(variant.annotation.dann_score).toPrecision(2) %> <br/>
//                 <% } %>
//                 <% if (variant.annotation.revel_score) {
//                     var revel_score = parseFloat(variant.annotation.revel_score)
//                     if( revel_score >= 0.75 ) { %>
//                         <i class="fa fa-circle redcircle"></i>
//                     <% } else if( revel_score >= 0.5 ) { %>
//                         <i class="fa fa-circle yellowcircle"></i>
//                     <% } else { %>
//                         <i class="fa fa-circle greencircle"></i>
//                     <% } %>
//                     <span>REVEL SCORE</span> <%= parseFloat(variant.annotation.revel_score).toPrecision(2) %> <br/>
//                 <% } %>
//                 <% if (variant.annotation.mpc_score) {
//                     var mpc_score = parseFloat(variant.annotation.mpc_score)
//                     if( mpc_score >= 2 ) { %>
//                         <i class="fa fa-circle redcircle"></i>
//                     <% } else if( mpc_score >= 1 ) { %>
//                         <i class="fa fa-circle yellowcircle"></i>
//                     <% } else { %>
//                         <i class="fa fa-circle greencircle"></i>
//                     <% } %>
//                     <span>MPC SCORE</span> <%= parseFloat(variant.annotation.mpc_score).toPrecision(2) %> <br/>
//                 <% } %>
//             <% } %>
//         </div>
//         <div class="cell frequencies">
//             <% if(variant.annotation && variant.annotation.freqs) {
//                 var grch37Coords = variant.extras.grch37_coords || (variant.chr+"-"+variant.pos+"-"+variant.ref+"-"+variant.alt);
//                 var grch37VariantIdSplit = grch37Coords.split("-");
//                 var grch37Pos = parseInt(grch37VariantIdSplit[1]);
//                 var grch37Region = grch37VariantIdSplit[0] + "-" + (grch37Pos - 100) + "-" + (grch37Pos + 100);
//
//                 var freqs = variant.annotation.freqs;
//                 if (variant.annotation.db == "elasticsearch") {
//                     var g1kAF = freqs["1kg_wgs_popmax_AF"] || freqs["1kg_wgs_AF"] || 0;
//                     var exacAF = freqs["exac_v3_popmax_AF"] || freqs["exac_v3_AF"] || 0;
//                     var gnomadExomesAF = freqs["gnomad_exomes_popmax_AF"] || freqs["gnomad_exomes_AF"] || 0;
//                     var gnomadGenomesAF = freqs["gnomad_genomes_popmax_AF"] || freqs["gnomad_genomes_AF"] || 0;
//                     var topmedAF = freqs["topmed_AF"];
//
//                     var callsetAF = freqs["AF"];
//
//                     var popCounts = variant.annotation.pop_counts;
//
//                     var grch38Coords = variant.extras.grch38_coords;
//                     if (topmedAF == 0) {
//                         var grch38VariantIdSplit = grch38Coords.split("-");
//                         var grch38Pos = parseInt(grch38VariantIdSplit[1]);
//                         var grch38Region = grch38VariantIdSplit[0] + "-" + (grch38Pos - 100) + "-" + (grch38Pos + 100);
//                     }
//                     var freqTooltipText = 'Allele Counts <table>' +
//                         '<tr><td>this callset</td><td>' + popCounts["AC"] + '</td></tr>' +
//                         '<tr><td>gnomad exomes</td><td>' + popCounts["gnomad_exomes_AC"] + '</td></tr>' +
//                         '<tr><td>gnomad genomes</td><td>' + popCounts["gnomad_genomes_AC"] + '</td></tr>' +
//                         '<tr><td>topmed</td><td>' + popCounts["topmed_AC"] + '</td></tr></table>';
//
//                 } else {
//                     var g1kAF = freqs["1kg_wgs_phase3_popmax"] || freqs["1kg_wgs_phase3"] || 0;
//                     var exacAF = freqs["exac_v3_popmax"] || freqs["exac_v3"] || 0;
//                     var gnomadExomesAF = freqs["gnomad-exomes2_popmax"];
//                     if ( typeof gnomadExomesAF === 'undefined' ) {
//                         gnomadExomesAF = freqs["gnomad-exomes2"];
//                     }
//                     var gnomadGenomesAF = freqs["gnomad-genomes2_popmax"];
//                     if ( typeof gnomadGenomesAF === 'undefined' ) {
//                         gnomadGenomesAF = freqs["gnomad-genomes2"];
//                     }
//                     var popCounts = {};
//                     var freqTooltipText = "";
//                 }
//                 %>
//                 <div class="gotooltip" data-placement="top" title="<%= freqTooltipText %>">
//
//                     <% if (typeof callsetAF !== 'undefined') { %>
//                         <div>
//                             <span>THIS CALLSET</span> <%= callsetAF.toPrecision(2) %>
//                             <small style="margin-left: 10px;">AC=<%= popCounts["AC"] %> out of <%= popCounts["AN"] %></small>
//                         </div>
//                     <% } %>
//
//                     <% if (typeof g1kAF !== 'undefined') { %>
//                         <div>
//                             <span>1KG WGS</span><%= g1kAF.toPrecision(2) %>
//                         </div>
//                     <% } %>
//
//                     <% if (typeof exacAF !== 'undefined') { %>
//                         <div>
//                             <span>EXAC</span>
//                             <% if (exacAF > 0) { %>
//                                 <a target="_blank" href="http://exac.broadinstitute.org/variant/<%= grch37Coords %>"><%= exacAF.toPrecision(2) %> </a>
//                             <% } else { %>
//                                  <a target="_blank" href="http://exac.broadinstitute.org/region/<%= grch37Region %>">0.0 </a>
//                             <% } %>
//                             <% if (typeof popCounts["exac_v3_Hom"] !== 'undefined') { %>
//                                 <small style="margin-left: 10px">Hom=<%= popCounts["exac_v3_Hom"] %></small>
//                                 <% if (variant.chr.endsWith('X') && typeof popCounts["exac_v3_Hemi"] !== 'undefined') { %>
//                                     <small style="margin-left:10px">Hemi=<%= popCounts["exac_v3_Hemi"] %></small>
//                                 <% } %>
//                             <% } %>
//                         </div>
//                     <% } %>
//
//                     <% if (typeof gnomadExomesAF !== 'undefined') { %>
//                         <div>
//                             <span>GNOMAD EXOMES</span>
//                             <% if (gnomadExomesAF > 0) { %>
//                                 <a target="_blank" href="http://gnomad.broadinstitute.org/variant/<%= grch37Coords %>"><%= gnomadExomesAF.toPrecision(2) %> </a>
//                             <% } else { %>
//                                 <a target="_blank" href="http://gnomad.broadinstitute.org/region/<%= grch37Region %>">0.0 </a>
//                             <% } %>
//                             <% if (typeof popCounts["gnomad_exomes_AC"] !== 'undefined') { %>
//                                 <small style="margin-left: 10px">Hom=<%= popCounts["gnomad_exomes_Hom"] %></small>
//                                 <% if (variant.chr.endsWith('X') && typeof popCounts["gnomad_exomes_Hemi"] !== 'undefined') { %>
//                                     <small style="margin-left:10px">Hemi=<%= popCounts["gnomad_exomes_Hemi"] %></small>
//                                 <% } %>
//                             <% } %>
//                         </div>
//                     <% } %>
//
//                     <% if (typeof gnomadGenomesAF !== 'undefined') { %>
//                         <div>
//                             <span>GNOMAD GENOMES</span>
//                             <% if (gnomadGenomesAF > 0) { %>
//                                 <a target="_blank" href="http://gnomad.broadinstitute.org/variant/<%= grch37Coords %>"><%= gnomadGenomesAF.toPrecision(3) %></a>
//                             <% } else { %>
//                                 <a target="_blank" href="http://gnomad.broadinstitute.org/region/<%= grch37Region %>">0.0</a>
//                             <% } %>
//                             <% if (typeof popCounts["gnomad_genomes_AC"] !== 'undefined') { %>
//                                 <small style="margin-left: 10px">Hom=<%= popCounts["gnomad_genomes_Hom"] %></small>
//                                 <% if (variant.chr.endsWith('X') && typeof popCounts["gnomad_genomes_Hemi"] !== 'undefined') { %>
//                                     <small style="margin-left:10px">Hemi=<%= popCounts["gnomad_genomes_Hemi"] %></small>
//                                 <% } %>
//                             <% } %>
//                         </div>
//                     <% } %>
//                     <% if (typeof topmedAF !== 'undefined') { %>
//                         <div>
//                             <span>TOPMED</span>
//                             <% if (topmedAF > 0) { %>
//                                 <a target="_blank" href="https://bravo.sph.umich.edu/freeze5/hg38/variant/<%= grch38Coords %>"><%= topmedAF.toPrecision(3) %></a>
//                             <% } else { %>
//                                 <a target="_blank" href="https://bravo.sph.umich.edu/freeze5/hg38/region/<%= grch38Region %>">0.0</a>
//                             <% } %>
//                         </div>
//                     <% } %>
//                 </div>
//             <% } %>
//         </div>


//                         <% if(genotype && genotype.extras && genotype.extras.cnvs)  {
//                             var cnvs = genotype.extras.cnvs;
//                         %>
//                             <span class="label label-danger gotooltip"
//                                     data-placement="top"
//                                     title="Copy Number: <%= cnvs['cn'] %><br>LRR median: <%= cnvs['LRR_median'] %><br>LRR stdev: <%= cnvs['LRR_sd'] %><br>SNPs supporting call: <%= cnvs['snps'] %><br>Size: <%= cnvs['size'] %><br>Found in: <% print(parseInt(cnvs['freq'])-1) %> other samples<br>Type: <%= cnvs['type'] %><br>Array: <%= cnvs['array'].replace(/_/g, ' ') %><br>Caller: <%= cnvs['caller'] %><br>">
//                                 CNV: <%= cnvs['cn'] > 2 ? 'Duplication' : 'Deletion' %>
//                             </span><br>
//                         <% } %>

//         <% if (actions.length > 0) { %>
//             <div class="cell actions" style="text-align:right">
//                 <% _.each(actions, function(action) { %>
//                     <a class="btn btn-primary btn-xs action" data-action="<%= action.action %>"> <%= action.name %></a><br/>
//                 <% }); %>
//             </div>
//         <% } %>
//     </div>