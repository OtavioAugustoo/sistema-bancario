using BankingSystem.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<BankingContext>(options => options.UseSqlite("Data Source=bank.db"));

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthentication();
app.MapControllers();

app.Run();
