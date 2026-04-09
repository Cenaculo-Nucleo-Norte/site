async function loadClas() {
    try {
        const response = await fetch('../data/clas.json');
        const data = await response.json();
        renderClas(data.nodes);
    } catch (error) {
        console.error('Erro ao carregar clãs:', error);
        document.getElementById('clas-grid').innerHTML = '<p>Erro ao carregar dados</p>';
    }
}

function renderClas(clas) {
    const grid = document.getElementById('clas-grid');
    
    clas.forEach(clan => {
        const card = document.createElement('div');
        card.className = 'clas-card';
        card.innerHTML = `
            <div class="clas-card-inner">
                <!-- FRONT -->
                <div class="clas-card-front">
                    <h2 class="clas-label">${clan.title}</h2>
                </div>
                
                <!-- BACK -->
                <div class="clas-card-back">
                    <div class="clas-back-content">
                        <div>
                            <span class="clas-id-badge">#${clan.id}</span>
                            <h3 class="clas-title">${clan.title}</h3>
                            <p class="clas-id-info">Clã do Cenáculo Núcleo Norte</p>
                        </div>
                        <a href="mailto:${clan.email}" class="clas-email">
                            <i class="fa fa-envelope"></i>
                            ${clan.email}
                        </a>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadClas);