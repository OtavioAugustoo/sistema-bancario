// Controllers/AccountsController.cs
[ApiController]
[Route("api/[controller]")]
public class AccountsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public AccountsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // Endpoint para obter todas as contas
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Account>>> GetAccounts()
    {
        return await _context.Accounts.ToListAsync();
    }

    // Endpoint para depositar
    [HttpPost("deposit")]
    public async Task<IActionResult> Deposit([FromBody] Transaction transaction)
    {
        // Lógica para encontrar a conta e atualizar o saldo
        // ...
    }
}