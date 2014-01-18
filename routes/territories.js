var bcrypt = require('bcrypt');


// POST to authenticate.
exports.login = function(req, res) {
	var pw = req.body.password;

}

exports.index = function(req, res) {
	var territories = ['Abbington','Acton-1','Acton-2', 'Acton-3', 'Allston','Andover-1','Andover-2', 'Andover-3', 'Andover-North-1','Andover-North-2', 'Arlington-1', 'Arlington-1', 'Arlington-2', 'Arlington-3', 'Arlington-4','Ashburnham-Ashby','Ashland','Attleboro','Auburn','Auburndale-1', 'Auburndale-2','Ayer',
						'Bedford-1', 'Bedford-2','Bellingham','Belmont-1', 'Belmont-2', 'Belmont-3', 'Belmont-4','Beverly','Billerica','Boston-1', 'Boston-2','Boston-3','Boston-4','Boston-5', 'Boston-6', 'Boston-7', 'Boston-8', 'Boston-9', 'Boston-10', 'Boston-11', 'Boston-12', 'Boston-13', 'Boston-14', 'Boston-15', 'Boston-16','Braintree-1', 'Braintree-2','Brighton-1', 'Brighton-2','Brockton','Brookline-1', 'Brookline-2', 'Brookline-3', 'Brookline-4', 'Brookline-5', 'Brookline-6','Burlington-1', 'Burlington-2','Buzzards-Bay',
						'Cambridge-1', 'Cambridge-2', 'Cambridge-3', 'Cambridge-4', 'Cambridge-5', 'Cambridge-6', 'Cambridge-7', 'Cambridge-8', 'Cambridge-9', 'Cambridge-10','Canton','Cape-1', 'Cape-2', 'Cape-3','Carlisle','Charlestown','Chelmsford','Chelsea','Chestnut-Hill-1','Chestnut-Hill-2','Chestnut-Hill-3','Chestnut-Hill-4','Concord',
						'Danvers','Dartmouth','Dedham','Dorchester-1', 'Dorchester-2', 'Dorchester-3','Dover','Dracut','Duxbury-Kingston','Everett','Fall-River','Fitchburg','Foxboro','Framingham-1', 'Framingham-2', 'Framingham-3','Franklin','Gardner','Grafton','Groton-Pepperelle','Harvard','Hingham','Holden','Holliston','Hopkinton','Hudson',
						'Jamaica-Plain','Lawrence','Leominster-1', 'Leominster-2','Lexington-1', 'Lexington-2', 'Lexington-3', 'Lexington-4', 'Lexington-5', 'Lexington-6', 'Lexington-7', 'Lexington-8', 'Lexington-9','Lincoln','Littleton','Lowell-1', 'Lowell-2', 'Lowell-3','Lunenburg-Shrley','Lynn','Lynnfield','Marblehead-Swampscott','Marlborough','Maynard',
						'Natick-1', 'Natick-2', 'Natick-3','Needham','New-Bedford','Newton-1', 'Newton-2', 'Newton-3', 'Newton-4', 'Newton-5', 'Newton-6','Newton-West', 'NH-Amherst','NH-Bedford','NH-Derry','NH-Londonderry','NH-Portsmouth','NH-Salem','NH-Windham','Northborough','Norton-Raynham','Norwood','Peabody','Quincy-1', 'Quincy-2', 'Quincy-3', 'Quincy-4',
						'Reading','Revere','Roxbury','S-Hamilton','Salem','Saugus','Sharon-1', 'Sharon-2','Shrewsbury-1', 'Shrewsbury-2','Somerville-1', 'Somerville-2', 'Somerville-3', 'Somerville-4', 'Somerville-5','Southborough','Stoneham','Stoughton','Stow','Sudbury','Tewksbury',
						'Wakefield','Waltham-1', 'Waltham-2', 'Waltham-3', 'Waltham-4','Watertown-1', 'Watertown-2','Wayland','Wellesley-1', 'Wellesley-2', 'Wellesley-3','Westborough','Westford','Weston-1','Weston-2','Westwood','Wilmington','Winchester-1', 'Winchester-2','Woburn']
	res.render('territories', {title: 'Territories', list: territories});
};
