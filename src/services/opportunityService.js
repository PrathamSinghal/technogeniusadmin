


const KEYS = {
    opportunity: 'opprotunity',
    opportunityId: 'opportunityId' 
}


export function insertOpportunities(data) {

    let opportunity = getAllOpportunities(); 
    data["id"] = generateOpportunityId();
    opportunity.push(data);

    localStorage.setItem(KEYS.opportunity, JSON.stringify(opportunity))

}


export function updateOpportunity(data) {
    let opportunity = getAllOpportunities();
    let recordIndex = opportunity.findIndex(x => x.id === data.id);
    opportunity[recordIndex] = { ...data }
    localStorage.setItem(KEYS.opportunity, JSON.stringify(opportunity));
}

export function generateOpportunityId() {
    if(localStorage.getItem(KEYS.opportunityId) == null)
        localStorage.setItem(KEYS.opportunityId, '0')
    var id = parseInt(localStorage.getItem(KEYS.opportunityId))
    localStorage.setItem(KEYS.opportunityId, (++id).toString())
    return id;    
}

export function getAllOpportunities() {
    if(localStorage.getItem(KEYS.opportunity) == null)
        localStorage.setItem(KEYS.opportunity, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.opportunity));

}

export function deleteOpportunity(id) {
    let opportunity = getAllOpportunities();
    opportunity = opportunity.filter(x => x.id !== id);
    localStorage.setItem(KEYS.opportunity, JSON.stringify(opportunity)); 
}