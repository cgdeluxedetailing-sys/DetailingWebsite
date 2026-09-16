const areas={bairnsdale:'Bairnsdale',drouin:'Drouin',glengarry:'Glengarry',heyfield:'Heyfield','loch-sport':'Loch Sport',maffra:'Maffra',moe:'Moe',morwell:'Morwell',newborough:'Newborough',rosedale:'Rosedale',sale:'Sale',stratford:'Stratford',trafalgar:'Trafalgar',toongabbie:'Toongabbie',traralgon:'Traralgon',warragul:'Warragul',yarram:'Yarram'};
const slug=location.pathname.split('/').filter(Boolean).pop()||document.body.dataset.area||'';
const key=slug.replace(/^car-detailing-/,'');
const town=areas[key]||document.body.dataset.area||key;
const copy={
 sale:'CG Mobile Detailing brings premium car care directly to homes and workplaces across Sale. From everyday interior cleans to complete vehicle transformations, we bring the full professional setup to you.',
 maffra:'CG Mobile Detailing brings premium car care to Maffra, just 17km from our Sale base. We handle everything from farm dust and mud on daily drivers to restoring the shine on weekend cars.',
 stratford:'CG Mobile Detailing provides convenient mobile detailing throughout Stratford, bringing professional interior and exterior care directly to your home or workplace.',
 rosedale:'CG Mobile Detailing brings professional mobile detailing to Rosedale, with interior cleans, exterior refreshes, paint protection and complete vehicle transformations available at your property.',
 traralgon:'CG Mobile Detailing services Traralgon with a complete mobile setup for deep interior cleans, exterior detailing, paint protection and ceramic coating.',
 morwell:'CG Mobile Detailing provides fully mobile car detailing throughout Morwell and surrounding Latrobe Valley areas, without the hassle of dropping your vehicle off.',
 moe:'CG Mobile Detailing brings professional vehicle detailing to Moe, from routine maintenance cleans through to full interior and exterior transformations.',
 bairnsdale:'CG Mobile Detailing services Bairnsdale and surrounding East Gippsland areas, bringing professional equipment directly to your home or workplace.',
 warragul:'CG Mobile Detailing provides mobile detailing throughout Warragul and surrounding West Gippsland areas, with professional interior, exterior and protection services.',
 drouin:'CG Mobile Detailing services Drouin, bringing everything required for a professional detail directly to your home or workplace.',
 heyfield:'CG Mobile Detailing provides convenient vehicle detailing throughout Heyfield, from deep interior cleans and exterior refreshes to ceramic coatings and paint protection.',
 trafalgar:'CG Mobile Detailing services Trafalgar in West Gippsland, bringing professional interior and exterior detailing directly to your home or workplace.',
 toongabbie:'CG Mobile Detailing services Toongabbie and surrounding rural areas, bringing the same professional equipment and attention to detail directly to your property.',
 'loch-sport':'CG Mobile Detailing brings mobile detailing to Loch Sport, with professional interior, exterior and paint protection services delivered where your vehicle is parked.',
 newborough:'CG Mobile Detailing services Newborough and the surrounding Latrobe Valley, bringing premium detailing and paint protection directly to your property.',
 glengarry:'CG Mobile Detailing provides fully mobile detailing throughout Glengarry and surrounding Gippsland areas, with professional results delivered at your home or workplace.',
 yarram:'CG Mobile Detailing brings professional mobile detailing to Yarram and surrounding South Gippsland areas, without the need for a workshop drop-off.'
};
document.title=`Mobile Car Detailing ${town} VIC | CG Mobile Detailing`;
const desc=document.querySelector('meta[name="description"]'); if(desc) desc.content=`Professional mobile car detailing in ${town} VIC. CG Mobile Detailing comes to your home or workplace.`;
document.querySelectorAll('[data-town]').forEach(el=>el.textContent=town);
const copyEl=document.querySelector('[data-copy]'); if(copyEl) copyEl.innerHTML=(copy[key]||`CG Mobile Detailing provides professional mobile car detailing throughout ${town} and surrounding Gippsland areas.`)+`<br><br>No drop-off. No waiting around. Just professional results delivered where your vehicle is parked.`;
const faq=document.querySelector('[data-faq]'); if(faq) faq.textContent=`Yes, CG Mobile Detailing provides fully mobile detailing throughout ${town} and surrounding areas.`;