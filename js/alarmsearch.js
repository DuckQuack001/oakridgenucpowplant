document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("alarmSearch");

    searchInput.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;

        const searchTerm = searchInput.value.toLowerCase().trim();
        if (!searchTerm) return;

        const buttons = document.querySelectorAll(".info-table button");

        let foundButton = null;

        buttons.forEach(button => {
            if (foundButton) return;

            const text = button.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                foundButton = button;
            }
        });

        if (foundButton) {
            const details = foundButton.closest("details");
            if (details && !details.open) {
                details.open = true;
            }

            foundButton.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            foundButton.classList.add("search-highlight");
            setTimeout(() => {
                foundButton.classList.remove("search-highlight");
            }, 2000);
        }
    });
});