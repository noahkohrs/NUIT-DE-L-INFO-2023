var healBar = /** @class */ (function () {
    function healBar(scenario, healthBar) {
        this.health = scenario.environnement;
        this.healthBar = healthBar;
    }
    healBar.prototype.checkEnd = function () {
        if (this.health === 0) {
            alert("Vous avez perdu");
            changePage('index.html');
        }
    };
    // Function to get color based on health level
    healBar.prototype.getColorForHealth = function (health) {
        // Example: interpolate between green (100%) and red (0%)
        var green = 255;
        var red = 255 - Math.round((health / 4.5) * 255);
        return "rgb(".concat(red, ", ").concat(green, ", 0)");
    };
    // Function to update the health bar based on the health value
    healBar.prototype.updateHealthBar = function (newHealth) {
        // Ensure health is within the valid range (0 to 100)
        this.health = Math.max(0.5, Math.min(newHealth, 4.5));
        // Update the width of the health fill element
        this.healthBar.style.width = (this.health / 4.5) * 100 + '%';
        this.healthBar.textContent = this.health.toFixed(3).toString() + "°C";
        // Adjust the color based on the health level (for example, green to red)
        var color = this.getColorForHealth(this.health);
        this.healthBar.style.backgroundColor = color;
    };
    healBar.prototype.changeHealthBar = function (newHealth) {
        this.updateHealthBar(newHealth);
    };
    return healBar;
}());
export { healBar };
